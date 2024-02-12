import { AssociativeArray } from "../Api/fakeApi";
import { Product } from "./Product.model";

export class pc extends Product{
    constructor( name:string, discription:string, price:number, categorie:string, colors:AssociativeArray<string[]>,private cpu:string,private motherboard:string,private gpu:string,private ram:string){
        super(name,discription,price,categorie,colors)
    }
    getCpu()
    {return this.cpu}
    getGpu()
    {return this.gpu}
    getRam()
    {return this.ram}
    getMotherBoard()
    {return this.motherboard}
}