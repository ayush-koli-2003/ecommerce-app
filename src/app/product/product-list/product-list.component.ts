import { Component } from '@angular/core';
import { Product } from '../../interfaces/product.model';
import { ProductServiceService } from '../product-service.service';
import { AuthService } from '../../auth/auth.service';
import { OrderService } from '../../order/order.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productList:Array<Product>=[]
  cartList:Array<Product>;
  role:string="";

  constructor(private productService:ProductServiceService,private orderService:OrderService, private authService:AuthService){
    this.cartList=new Array();

    this.productList = [{productId:1,productImage:"https://th.bing.com/th/id/OIP.vutZp9AOZ3ena4Bn3d0_PQHaIg?rs=1&pid=ImgDetMain",productName:"headphone",producPrice:1000},{productId:2,productImage:"https://th.bing.com/th/id/OIP.A5aNdTGib5znukF3O8Zz7gHaE8?rs=1&pid=ImgDetMain",productName:"drone",producPrice:3000},{productId:3,productImage:"https://th.bing.com/th/id/OIP.HR6f8Ijw6H533zm9T906aQHaFh?rs=1&pid=ImgDetMain",productName:"dishes",producPrice:100}];
  }


  addCart(id:number){
    this.productService.addToCart(id);
    console.log(this.cartList);
    
  }

  removeFromList(id:number){
    this.productService.removeFromList(id);
    // console.log(this.cartList);
  }

  addOrder(price:number,name:string){
    this.productService.addOrder(price,name);
  }
}
