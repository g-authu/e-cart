import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  ProductDetails:any;
search:any
  constructor(private api:ApiService, private wlist:WishlistService,private cartService:CartService) { }

  ngOnInit(): void {
    this.api.getproducts()
    .subscribe((result:any)=>{
      this.ProductDetails=result.products
      console.log(this.ProductDetails);
      this.ProductDetails.forEach((item:any)=>{
        Object.assign(item,{Quantity:1,Total:item.price})
      })
      
    })
    this.api.searchTerm.subscribe((data)=>{
      this.search = data
    })
  }

  addTowishList(product:any){
    this.wlist.addTowList(product)
    alert('product added to wish list')

  }

  addToCart(product:any){
this.cartService.addToCart(product)
  }

}