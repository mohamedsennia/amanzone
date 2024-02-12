import { Component } from '@angular/core';
import { Categorie } from '../../Categories/Categorie.model';
import { CategorieService } from '../../Categories/Categories.service';
import { SubCategorieService } from '../../Categories/SubCategorie/SubCategorie.Service';
import { AppService } from '../../app.service';
import { FakeApiService } from 'src/app/Api/fakeApi.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
categories:Categorie[]
sub=-1;
isOpen=false;
search:string
constructor(private categorieService:CategorieService,private appService:AppService,private router:Router){
  this.categories=categorieService.getCategories();
  this.appService.ToggleBurger.subscribe(param=>{
    this.isOpen=param
  })
  this.search=""
}
changeSub(i:number){

  this.sub=i;
}
getSub(catgorie:string){
 
return this.categorieService.getSubCategoriesByCategorie(catgorie);
}
toggleBurger(){
  this.isOpen=!this.isOpen
  this.appService.ToggleBurger.next(this.isOpen)
}
checkLast(i:number){
  if(i==this.categories.length-1){
    return false
  }
  return true
}
searchExe(){
if(this.search!=""){
  
  this.router.navigate(["/search"],{queryParams:{search:this.search}})
}
}
}
