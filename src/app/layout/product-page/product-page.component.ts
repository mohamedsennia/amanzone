import { Component, OnInit } from '@angular/core';
import { FakeApiService } from '../../Api/fakeApi.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../Products/Product.model';
import { ProductService } from '../../Products/Product.service';
import { CartService } from '../cart/Cart.service';
import { Shoes } from '../../Products/Shoes.model';
import { flatMap } from 'rxjs';
import { Clothe } from '../../Products/Clothes.model';
import { pc } from 'src/app/Products/pc.model';
import { Monitor } from 'src/app/Products/monitor.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit{
product:Product
imagIndex:number
counter:number
color:string
colors:string[]
size=0;
sizes=[];
constructor(private productService:ProductService,private route:ActivatedRoute,private cartService:CartService){
this.imagIndex=0;
this.counter=1;


}
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
     this.product= this.productService.getProductById(params["id"])
     this.colors=Object.keys(this.product.getColors())
this.color=this.colors[0]
if(this.product instanceof Clothe){
 this.sizes=(this.product as Clothe).getSizes();
 }else{
   if(this.product instanceof Shoes){
  
     this.sizes=(this.product as Shoes).getSizes();
   }
 }
    })
  }
next(){
if(this.imagIndex+1<this.product.getImages(this.color).length){
  this.imagIndex+=1;
}
return this.imagIndex
}
prev(){
  if(this.imagIndex>0){
    this.imagIndex-=1;
  }
}
increaseCounter(){
this.counter+=1
}
decreaseCounter(){
  if(this.counter>1){
    this.counter-=1
  }
  
}
addToCart(){
  this.cartService.addProduct(this.product,this.color,this.sizes[this.size] ,this.counter);
}
changeColor(c:string){
  this.imagIndex=0;
  console.log(c)
this.color=c
}
HasSizes(){
  if(this.product instanceof (Shoes||Clothe)){
    
return true
  }
  return false
}
select(i:number){
this.size=i;
console.log(this.size)
}
isSelected(i:number){
 return i==this.size ?'selected taille clickable':'white taille clickable'
}
backgroundColor(c){
  return "background-color:"+c
}
isPC(){
  if(this.product instanceof(pc)){
    return true
  }
  return false
}
isMonitor(){
  if(this.product instanceof (Monitor)){
    return true
  }
  return false
}
getCpu(){
  return (this.product as pc).getCpu()
}
getMotherBoard(){
  return (this.product as pc).getMotherBoard()
}
getRam(){
  return (this.product as pc).getRam()
}
getGpu(){
  return (this.product as pc).getGpu()
}
}
