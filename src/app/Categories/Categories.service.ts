import { Injectable } from "@angular/core";
import { Categorie } from "./Categorie.model";
import { FakeApiService } from "../Api/fakeApi.service";

@Injectable({providedIn:"root"})
export class CategorieService{
    categories:Categorie[];
    constructor(private fakeApiService:FakeApiService){
        this.categories=Object.values(this.fakeApiService.getAllCategories());
    }
    getCategories(){
        return this.categories.slice()
    }
    getSubCategoriesByCategorie(catgorie:string){
      return  this.fakeApiService.getSubCategoriesByCategorie(catgorie);
    }

}
