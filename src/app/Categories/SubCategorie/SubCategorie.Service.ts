import { Injectable } from "@angular/core";

import { FakeApiService } from "../../Api/fakeApi.service";
import { SubCategorie } from "./SubCategorie.Model";

@Injectable({providedIn:"root"})
export class SubCategorieService{
    Subcategories:SubCategorie[];
    constructor(private fakeApiService:FakeApiService){
       // this.categories=Object.values(this.fakeApiService.getAllCategories());
    }
    getCategories(){
        return this.Subcategories.slice()
    }

}
