import { AssociativeArray } from "../Api/fakeApi";
import { Product } from "./Product.model";

export class Monitor extends Product{
    constructor( name:string, discription:string, price:number, categorie:string, colors:AssociativeArray<string[]>,private height:number,private width:number,private frequency:number,){
        super(name,discription,price,categorie,colors)
    }
    getHeight(){
        return this.height;
    }
    getWidth(){
        return this.width;
    }
    getFrequency(){
        return this.frequency
    }
    getResolution(){
        return this.height+" X "+this.width
    }
}