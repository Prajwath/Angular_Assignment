import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from './services/products.service';

const routes: Routes = [
  {path:'test', component:ProductsComponent},
  {path:'first', component:ProductsService},
  {path:'product/:id', component:ProductsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
