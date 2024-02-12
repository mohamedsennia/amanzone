import { AssociativeArray } from "../Api/fakeApi";
import { Product } from "./Product.model";

export class Shoes extends Product{
    constructor( name:string, discription:string, price:number, categorie:string,colors:AssociativeArray<string[]>,private sizes:number[]){
        super(name,discription,price,categorie,colors);
    }
    getSizes(){
        return this.sizes.slice();
    }
}