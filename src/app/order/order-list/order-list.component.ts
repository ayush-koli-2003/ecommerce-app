import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { ProductServiceService } from '../../product/product-service.service';
import { Product } from '../../interfaces/product.model';
import { Order } from '../../interfaces/order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  standalone: false,
  
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent {

  orderList:Array<Order>
  constructor(private orderService:OrderService,private authService:AuthService){
      // this.cartList=new Array();
  
      this.orderList = orderService.getOrderList();
    }
  
    // removeFromList(id:number){
    //   this.productService.removeFromList(id);
    //   // console.log(this.cartList);
    // }

}
