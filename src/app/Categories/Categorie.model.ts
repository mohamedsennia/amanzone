export class Categorie{
    
   
    constructor(private name:String, private imgae:String){
        this.name=name;
        this.imgae="../../assets/Categories/"+imgae;
    }
    getName(){
        return this.name;
    }
    getImage(){
        return this.imgae;
    }
}