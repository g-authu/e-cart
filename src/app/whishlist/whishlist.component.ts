import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-whishlist',
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.css']
})
export class WhishlistComponent implements OnInit {
  whishlist:any

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    if(localStorage.getItem("whishlist")){
      this.whishlist = JSON.parse(localStorage.getItem("whishlist")!);
      console.log( this.whishlist);
    }
  }

  removeItem(product:any){
    let removeItemList = this.whishlist.filter((item:any)=>item.id!=product.id)
    console.log(removeItemList);
    localStorage.setItem("whishlist",JSON.stringify(removeItemList))
    this.whishlist = JSON.parse(localStorage.getItem("whishlist")!)
  }
  addToCart(products:any){
    this.cartService.addToCart(products)
    this.removeItem(products)
  }

}
