
import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../Categories/Categorie.model';
import { CategorieService } from '../../Categories/Categories.service';
import { ProductService } from '../../Products/Product.service';
import { Product } from '../../Products/Product.model';
import { trigger, style, transition, animate, state } from '@angular/animations';
import { FakeApi } from '../../Api/fakeApi';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  animations:[
    trigger('carouselAnimation', [
     state("current",style({
      left:"20%",
     
     })),
     state("prev",style({
      left:"-100%",
     
     })),
     state("next",style({
      left:"175%",
      
     })),
     transition("current<=>*",animate(300))
     
   
     

    ])
  ]
})
export class MainPageComponent implements OnInit {
public categories:Categorie[];
public products:Product[];
public currentSlide:number;
public previousSlide:number;
useFadeInAnimation =true;

constructor(private categorieService:CategorieService,private productService:ProductService){
  this.categories=categorieService.categories;
  this.products=productService.getTopFiveProducts();
  this.currentSlide=0;
  this.previousSlide=0;

}
  ngOnInit(): void {
    setInterval(()=>{
      this.currentSlide=(this.currentSlide+1)%this.products.length
    },10000)

  }
next(){
  if(this.currentSlide<this.products.length-1){
    this.currentSlide=(this.currentSlide+1);
  }
  
}
prev(){
  

    if(this.currentSlide>0){
      //this.previousSlide=(this.previousSlide-1);
      this.currentSlide=(this.currentSlide-1);
   

}}
getState(i:number,slide:Product){
  
  
  if(i>this.currentSlide){
    
    return "next"
  }
  if(i<this.currentSlide){
    
    return "prev"
  }

  return "current"

}
getImage(categorie:Categorie){
  return "background-image: url('"+categorie.getImage()+"')"
}
}
