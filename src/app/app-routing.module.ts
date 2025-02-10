import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'user',loadChildren:()=>import ('./user/user.module').then(m=>m.UserModule)},
  {path:'products',loadChildren:()=>import ('./product/product.module').then(m=>m.ProductModule)},
  {path:'orders',loadChildren:()=> import ('./order/order.module').then(m=>m.OrderModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
