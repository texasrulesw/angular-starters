import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';  //to receive a product as input//

@Component({
  selector: 'app-product-alerts',  //name of the component//
  templateUrl: './product-alerts.component.html', //references HTML page//
  styleUrls: ['./product-alerts.component.css'] //references CSS page//
})
export class ProductAlertsComponent implements OnInit {  //This export class handles the functionality of the component//
  
  @Input() product;  //@Input indicates the property value passes in from the components parent, the product list component//

  constructor() { }

  ngOnInit() {
  }

}