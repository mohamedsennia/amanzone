

export class Categorie{
    
   
    constructor(private id:string,private name:String, private imgae:String){
      
        this.imgae="../../assets/Categories/"+imgae;
     
    }

    getName(){
        return this.name;
    }
    getImage(){
        return this.imgae;
    }
    getId(){
        return this.id;
    }
}