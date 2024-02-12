import { Component, OnInit } from '@angular/core';
import { Product } from '../Products/Product.model';
import { ProductService } from '../Products/Product.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {
products:Product[]
categorie=""
constructor(private productService:ProductService,private route:ActivatedRoute,private router:Router){
  
}
  ngOnInit(): void {
    let filtred=false

    this.route.queryParams.subscribe(queryParams=>{
        if(queryParams["sub"]){
          this.products=this.productService.getProductsBySubCategorie(queryParams["sub"])
          filtred=true
        }
      })
      if(!filtred){
        this.route.queryParams.subscribe(queryParams=>{
          if(queryParams["search"]){
            this.products=this.productService.search(queryParams["search"])
            filtred=true
          }
        })
      }
    if(!filtred){
      this.route.params.subscribe(params=>{
   
        this.categorie=params["categorie"]
        this.products=this.productService.getProductsByCategorie(this.categorie)
        console.log(this.products)
        if(!this.products){
          this.router.navigate(['page-not-found']);
        }
      
      })
    
    }
  }
getImage(product:Product){
  return product.getImage()
}
}
