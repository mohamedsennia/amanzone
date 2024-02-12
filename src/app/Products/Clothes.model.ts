import { AssociativeArray } from "../Api/fakeApi";
import { Product } from "./Product.model";

export class Clothe extends Product{
    constructor( name:string, discription:string, price:number, categorie:string, colors:AssociativeArray<string[]>,private sizes:string[]){
        super(name,discription,price,categorie,colors);
    }
    getSizes(){
        return this.sizes.slice();
    }
}