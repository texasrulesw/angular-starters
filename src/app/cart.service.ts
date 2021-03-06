import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  getShippingPrices(){
    return this.http.get('assets/shipping.json');
  }

  constructor(
    private http: HttpClient
  ) { }

}