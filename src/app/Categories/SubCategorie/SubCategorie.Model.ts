

export class SubCategorie{
    
   
    constructor(private id:string,private name:String, private imgae:String,private categorie:string){
  
        this.imgae="../../assets/SubCategories/"+imgae;
     
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
    getCategorie(){
        return this.categorie;
    }
}