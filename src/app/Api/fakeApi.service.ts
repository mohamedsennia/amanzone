import { Injectable } from "@angular/core";
import { FakeApi } from "./fakeApi";
import { AppService } from "../app.service";
import { retry } from "rxjs";

@Injectable({providedIn:"root"})
export  class FakeApiService{
    public fakeApi:FakeApi
constructor(private appService:AppService){
this.fakeApi=new FakeApi()
}
getAllCategories(){
    return this.fakeApi.getAllCategories()
}
getAllProducts(){
    return this.fakeApi.getAllProducts()
}
getProductsByCategorie(categorie:String){
    return this.fakeApi.getProductsByCategorie(categorie);
}
//getProductsBySubCategorie
getProductsBySubCategorie(subCategorie:string){
    return this.fakeApi.getProductsBySubCategorie(subCategorie);
}
getProductById(id:string){
  return  this.fakeApi.getProductById(id);
}
login(email:string,password:string){
    if(this.fakeApi.login(email,password)){
        this.appService.logIn()
        return true
    }
   return false
}
getSubCategoriesByCategorie(catgorie){
 return   this.fakeApi.getSubCategoriesByCategorie(catgorie);
}
search(query:string){
return this.fakeApi.search(query)
}
}