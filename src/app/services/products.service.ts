import { Injectable } from '@angular/core';

export interface Product {
  name: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root', // this will Makes the service available globally
})
export class ProductsService {
  private products: Product[] = [
    { name: 'Laptop', description: 'A powerful laptop', price: 1000 },
    { name: 'Smartphone', description: 'A modern smartphone', price: 700 },
  ];

  constructor() {}

  // this will Get all products
  getProducts(): Product[] {
    return [...this.products]; // this will Return a copy to prevent direct modification
  }

  // Add a new product
  addProduct(product: Product): void {
    this.products.push(product);
  }

  // Delete a product by index
  deleteProduct(index: number): void {
    this.products.splice(index, 1);
  }

  getProductByIndex(index:number|null){
    if (index == null)
      return null
    return this.products[index];
  }

  
}
