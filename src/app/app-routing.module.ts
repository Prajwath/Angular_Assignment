import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/test', pathMatch: 'full' }, // Default route
  { path: 'test', component: ProductsComponent }, // Product list route
  { path: 'product/:id', component: ProductDetailsComponent }, // Product details route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
