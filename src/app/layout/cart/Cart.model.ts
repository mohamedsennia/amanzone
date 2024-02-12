import { Product } from "../../Products/Product.model";

export class Cart{
    private total:number;
    private product:Product;
    constructor(private items:[Product,string,string,number][],total:number){
       
        this.total=total;
        for(let item of items){
            //console.log(product)
            //this.total+=(item[4]*item[5])
        }
    }
    getProducts(){
   return this.items;
        }
    addProduct(product:Product,color:string,size:string,counter:number){
        this.items.push([product,color,size,counter])
       this.total+=product.getPrice()*counter;
    }
    removeProduct(i:number){
        this.items.splice(i,1);
    }   
    getTotal(){
        return this.total;
    }

    updateTotal(price:number){
    this.total+=price;
    }
}