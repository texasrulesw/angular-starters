import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
//FormBuilder is already brought in by the app.module.ts in ReactiveFormsModule


import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items; //defining items property

  constructor(
    
    private cartService: CartService,
    //this is injecting cartService into the component to be used
    private formBuilder: FormBuilder,
    //inject FormBuilder into the component to be used.

  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

}