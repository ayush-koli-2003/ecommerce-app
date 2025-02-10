import { NgModule } from "@angular/core";
import { Router, RouterModule,Routes } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { ManagerGuard } from "../auth/manager.guard";

const routes:Routes = [
    {path:'',redirectTo:'productList',pathMatch:'full'},
    {path:'productList',component:ProductListComponent},
    {path:'addProduct',component:AddProductComponent,canActivate:[ManagerGuard]}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class ProductRoutingModule{}