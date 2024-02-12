import { AssociativeArray } from "../Api/fakeApi";

export class Product{
    static counter=0;
    private id;
    constructor(private name:string,private discription:string,private price:number,private categorie:string,private colors:AssociativeArray<string[]> ){
       Product.counter+=1;
       this.id=Product.counter;
    }
    getId(){
        return this.id; 
    }
    getName(){
        return this.name;
    }
    getImage(){
        return this.colors[Object.keys(this.colors)[0]][0];
    }
    getCategorie(){
        return this.categorie;
    }
    getPrice(){
        return this.price;
    }
    getImages(color:string){
        return this.colors[color].slice()
    }
    getColors(){
        return this.colors;
    }
    getDiscription(){
        return this.discription
    }
    addColor(color:string,images:string[]){
        this.colors[color]=images;
    }
}