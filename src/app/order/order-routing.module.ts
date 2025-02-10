import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { OrderListComponent } from "./order-list/order-list.component";
import { CustomerGuard } from "../auth/customer.guard";
import { EditOrderComponent } from "./edit-order/edit-order.component";

const routes:Routes = [
    {path:'',redirectTo:'orderList',pathMatch:'full'},
    {path:'orderList',component:OrderListComponent,canActivate:[CustomerGuard]},
    {path:'editOrder',component:EditOrderComponent,canActivate:[CustomerGuard]}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class OrderRoutingModule{}