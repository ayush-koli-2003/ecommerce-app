import { Injectable } from '@angular/core';
import { ProductServiceService } from '../product/product-service.service';
import { Order } from '../interfaces/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  static id:number = 1;
  
    orderList:Array<Order>
    // cartList:Array<Product>;
  
    constructor() { 
      this.orderList = new Array();
      // this.cartList = new Array();
    }
  
    addOrder(params:any){
      return this.orderList.push({orderId:OrderService.id++,orderStatus:'In transit',...params});
    }
  
    // addToCart(id:number){
    //   // console.log(id);
      
    //   for(let i=0;i<this.orderList.length;i++){
    //       // console.log(this.orderList[i].id);
    //       if(this.orderList[i].productId===id){
              
    //         this.cartList.push(this.orderList[i]);
    //         break;
    //       }
    //   }
    //   // this.subjectCart.next(this.cartList);
    //   return this.cartList;
    // }
  
    // removeFromCart(id:number){
    //   for(let i=0;i<this.cartList.length;i++){
    //     if(this.cartList[i].productId===id){
            
    //       this.cartList.splice(i,1);
    //       break;
    //     }
    //   }
    //   // this.subjectCart.next(this.cartList);
    //   return this.cartList;
    // }
  
    getOrderList(){
      return this.orderList;
    }
  
    // removeFromList(id:number){
    //   for(let i=0;i<this.orderList.length;i++){
    //     if(this.orderList[i].productId===id){
            
    //       this.orderList.splice(i,1);
    //       break;
    //     }
    //   }
    //   for(let i=0;i<this.cartList.length;i++){
    //     if(this.cartList[i].productId===id){
            
    //       this.cartList.splice(i,1);
    //       break;
    //     }
    //   }
    // }
  
    // addProduct(image:string,name:string,category:string,price:number,rating:number){
  
    //   let p:Product = {productId:ProductServiceService.id++,productImage:image,productName:name,producPrice:price};
    //   this.orderList.push(p);
    //   console.log(this.orderList);
    //   // this.subject.next(this.orderList);
    // }
}
