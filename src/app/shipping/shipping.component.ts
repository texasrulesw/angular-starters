import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',  //HTML uses the selector.  
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit { 
  //APP module uses the exported class name

  constructor() { }

  ngOnInit() {
  }

}