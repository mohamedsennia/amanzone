import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Products/Product.model';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})
export class ListElementComponent {
@Input("product") product:Product
hovered:boolean=false;
  getImage(product:Product){
    return product.getImage()
  }
  setHovered(){
    this.hovered=true
  }
  setNotHovered(){
    this.hovered=false
  }
}
