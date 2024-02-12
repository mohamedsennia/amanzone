import { Injectable } from "@angular/core";
import { Product } from "./Product.model";
import { FakeApiService } from "../Api/fakeApi.service";

@Injectable({providedIn:"root"})
export class ProductService{
    private products:Product[];
    constructor(private fakeApiService:FakeApiService){
        this.products=Object.values(this.fakeApiService.getAllProducts());
    }
    addProduct(product:Product){
        this.products.push(product);
    }
    getProductByIndex(i:number){
        return this.products.at(i);
    }
    getProductByName(name:string){
        for(let i=0;i<this.products.length;i++){
            if( this.products.at(i)?.getName()==name){
                return this.products.at(i);
            }
        }
        return null
        

    }
    getProducts(){
        return this.products.slice();
    }
    getTopFiveProducts(){
        return this.products.length>5 ? this.products.slice(0,5) : this.products.slice();
    }
    getProductsByCategorie(categorie:String){
        return this.fakeApiService.getProductsByCategorie(categorie)
    }
    getProductsBySubCategorie(subCategorie:string){
        return this.fakeApiService.getProductsBySubCategorie(subCategorie);
    }
    getProductById(id:string){
        return this.fakeApiService.getProductById(id);
    }
    search(query:string){
        return this.fakeApiService.search(query)
    }
}