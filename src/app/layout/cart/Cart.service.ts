import { Injectable } from "@angular/core";
import { Cart } from "./Cart.model";
import { Product } from "../../Products/Product.model";
import { FakeApiService } from "../../Api/fakeApi.service";

@Injectable({"providedIn":"root"})
export class CartService{
    private cart:Cart
    Pcounter=0;
    constructor(private fakeApiService:FakeApiService){
        this.cart=new Cart([],0);
              if(sessionStorage.getItem("Pcounter")!=null){
           let pcounter=parseInt(sessionStorage.getItem("Pcounter"));
           for(let i=1;i<pcounter+1;i++){
            if(sessionStorage.getItem(i.toString())!=null){
                let obj=JSON.parse(sessionStorage.getItem(i.toString()))
            
            this.addProduct(fakeApiService.getProductById(obj["id"]),obj["color"],obj["size"],parseInt(obj["counter"]))
            }else{

            }
            
           }
           
       
            
        }


    }
    getProducts(){
        return this.cart.getProducts();
        }
    addProduct(product:Product,color:string,size:string,counter:number){
        
        this.cart.addProduct(product,color,size,counter)
        this.Pcounter=this.Pcounter+1;
        
        sessionStorage.setItem("Pcounter",this.Pcounter.toString());
       let obj={"id":product.getId(),"color":color,"size":size,"counter":counter}
        sessionStorage.setItem(this.Pcounter.toString(),JSON.stringify(obj))
     
      
    }
    removeProduct(i:number){
        this.cart.removeProduct(i)
       sessionStorage.removeItem((i+1).toString());
       
    } 
    getTotal(){
        return this.cart.getTotal()
    }

    updateTotal(price:number,i:number){
        let obj=JSON.parse(sessionStorage.getItem((i+1).toString()))
        console.log(obj)
        if(price>0){
            obj["counter"]=obj["counter"]+1
        }else{
            obj["counter"]=obj["counter"]-1
        }
        console.log(obj)
        sessionStorage.setItem((i+1).toString(),JSON.stringify(obj))
        this.cart.updateTotal(price);
    }

}