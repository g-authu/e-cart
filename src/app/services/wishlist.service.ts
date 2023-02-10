import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  whishlist = new BehaviorSubject([])

wishListArray:any=[]
  constructor() { }

  addTowList(product:any){
    this.wishListArray.push(product)
    this.whishlist.next(this.wishListArray)
     let wlist = this.whishlist['_value']
    console.log(wlist);
    localStorage.setItem("whishlist",JSON.stringify(wlist))
  }
}
