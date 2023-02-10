import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { WhishlistComponent } from './whishlist/whishlist.component';

const routes: Routes = [
//all products

{
  path:'',component:AllProductsComponent
},

{
  path:'cart',component:CartListComponent
},

{
  path:'whishlist',component:WhishlistComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
