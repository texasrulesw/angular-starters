import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items =[];  
  //we are defining items as an array for things put in the cart//

  addToCart(product){
    this.items.push(product);
    //this method is to add product to the array "items"//
  }

  getItems(){
    return this.items;
    //this method collects the user products and quantity//
  }

  clearCart(){
    this.items = [];
    return this.items;
    //this method returns an empty array of items//
  }

  constructor() { }

}