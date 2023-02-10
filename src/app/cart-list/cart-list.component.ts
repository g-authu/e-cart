import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  products=[]
  totalPrice=0
  constructor(private cartService : CartService , private router:Router) { }

  ngOnInit(): void {
this.cartService.getProducts().subscribe((data)=>{
  this.products = data
  console.log(this.products);

  
})

this.totalPrice = this.cartService.getTotalPrice()

  }
  
  removeItemCart(item:any){
    this.cartService.removeItemCart(item)
    this.totalPrice = this.cartService.getTotalPrice()
  }

  removeAllItem(){
    this.cartService.removeAllItemCart()
  }

  //checkout  - apply 10% discount when cart is more than 3
  checkout(){
    if(this.products.length>=3){
      //apply 10% discount on total price
      let discount =(this.totalPrice *10)/100
      let discountprice =this.totalPrice -discount
      alert('Your Order is confirmed!!  And Total Price After Discount is :'+discountprice)
       this.removeAllItem()
       this.router.navigateByUrl("")
    }
    else{
      alert('Your Order is confirmed!!  And Total Price After Discount is :'+Math.floor(this.totalPrice))
      this.removeAllItem()
      this.router.navigateByUrl("")
    }
}
}
