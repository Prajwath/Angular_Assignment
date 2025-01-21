import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  // productDetails: string|null|undefined = ""
  productDetails: Product | null | undefined;
  constructor(private productsService:ProductsService,private activeRoute:ActivatedRoute){


  }

  ngOnInit() {
    let id= this.activeRoute.snapshot.paramMap.get('id')
    if(id==null){
      id="0"
    }
    this.productDetails = this.productsService.getProductByIndex(Number .parseInt(id))
    
  }
  
}
