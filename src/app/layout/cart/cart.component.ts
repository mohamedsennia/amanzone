import { Component } from '@angular/core';
import { CartService } from './Cart.service';
import { Product } from '../../Products/Product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  
constructor(public cartService:CartService){

}
removeItem(i){
  this.cartService.removeProduct(i)
}

increaseCounter(item,i){
  
  item[3]=item[3]+1;
  this.cartService.updateTotal(item[0].getPrice(),i);
}
decreaseCounter(item,i){
  if(item[3]>1){
    item[3]=item[3]-1;
 this.cartService.updateTotal(-item[0].getPrice(),i);
}}
}
