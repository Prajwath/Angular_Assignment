import { Injectable } from '@angular/core';

export interface Product {
  name: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root', // Service is globally available
})
export class ProductsService {
  private products: Product[] = [
    { name: 'Laptop', description: 'A powerful laptop', price: 1000 },
    { name: 'Smartphone', description: 'A modern smartphone', price: 700 },
  ];

  constructor() {}

  // Get all products
  getProducts(): Product[] {
    return [...this.products]; // Return a copy to prevent direct modification
  }

  // Add a new product
  addProduct(product: Product): void {
    this.products.push(product);
  }

  // Delete a product by index
  deleteProduct(index: number): void {
    if (index >= 0 && index < this.products.length) {
      this.products.splice(index, 1);
    }
  }

  // Get product by index
  getProductByIndex(index: number): Product | null {
    return this.products[index] ?? null;
  }
}
