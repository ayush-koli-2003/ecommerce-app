import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.model';
import { OrderService } from '../order/order.service';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  static id:number = 4;

  productList:Array<Product>
  cartList:Array<Product>;

  constructor(private orderService:OrderService) { 
    this.productList = new Array();
    this.productList = [{productId:1,productImage:"https://th.bing.com/th/id/OIP.vutZp9AOZ3ena4Bn3d0_PQHaIg?rs=1&pid=ImgDetMain",productName:"headphone",producPrice:1000},{productId:2,productImage:"https://th.bing.com/th/id/OIP.A5aNdTGib5znukF3O8Zz7gHaE8?rs=1&pid=ImgDetMain",productName:"drone",producPrice:3000},{productId:3,productImage:"https://th.bing.com/th/id/OIP.HR6f8Ijw6H533zm9T906aQHaFh?rs=1&pid=ImgDetMain",productName:"dishes",producPrice:100}];
    this.cartList = new Array();
  }

  getProductList(){
    return this.productList;
  }

  addToCart(id:number){
    // console.log(id);
    
    for(let i=0;i<this.productList.length;i++){
        // console.log(this.productList[i].id);
        if(this.productList[i].productId===id){
            
          this.cartList.push(this.productList[i]);
          break;
        }
    }
    // this.subjectCart.next(this.cartList);
    return this.cartList;
  }

  removeFromCart(id:number){
    for(let i=0;i<this.cartList.length;i++){
      if(this.cartList[i].productId===id){
          
        this.cartList.splice(i,1);
        break;
      }
    }
    // this.subjectCart.next(this.cartList);
    return this.cartList;
  }

  getCartList(){
    return this.cartList;
  }

  removeFromList(id:number){
    for(let i=0;i<this.productList.length;i++){
      if(this.productList[i].productId===id){
          
        this.productList.splice(i,1);
        break;
      }
    }
    for(let i=0;i<this.cartList.length;i++){
      if(this.cartList[i].productId===id){
          
        this.cartList.splice(i,1);
        break;
      }
    }
  }

  addProduct(image:string,name:string,category:string,price:number,rating:number){

    let p:Product = {productId:ProductServiceService.id++,productImage:image,productName:name,producPrice:price};
    this.productList.push(p);
    console.log(this.productList);
    // this.subject.next(this.productList);
  }

  addOrder(price:number,name:string){
    this.orderService.addOrder({orderPrice:price,orderName:name});
  }

}
