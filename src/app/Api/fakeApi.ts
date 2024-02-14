import { Categorie } from "../Categories/Categorie.model"
import { Clothe } from "../Products/Clothes.model";
import { Product } from "../Products/Product.model";
import { Shoes } from "../Products/Shoes.model";
import { SubCategorie } from "../Categories/SubCategorie/SubCategorie.Model";
import { pc } from "../Products/pc.model";
import { Monitor } from "../Products/monitor.model";
export interface AssociativeArray<t>    {
    [key: string]: t
 }

export class FakeApi{
     private categories:AssociativeArray<Categorie>;
     private SubCategories:AssociativeArray<SubCategorie>;
    private  products:AssociativeArray<Product>;
    private  users:AssociativeArray<string>;
    constructor(){
       this.categories={
        "men-C":new Categorie("men-C","Men Clothes",'Men.jpg'),
        "women-C":new Categorie("women-C","Women Clothes","Women.png"),
        //"V":new Categorie("V","Véhicules","Audi.png"),
       // "baby-C":new Categorie("baby-C","Vêtements Bébé","Baby.png"),
        "acc":new Categorie("acc","Accessoires","Watch.png"),
        //"RE":new Categorie("RE","Immobiliers","House.png"),
        //"P":new Categorie("P","Téléphone","Phone.png"),
        "PA":new Categorie("PA","Phones accessoires","ear buds.png"),
        "CS":new Categorie("CS","Informatics","PC.png")
    }
  let jordan1=new Shoes("Jordan 1","retro blabla",12500,"Mshoes",
  {"blue":["../../assets/NIKES/J1 blue.png","../../assets/NIKES/J1 blue.png","../../assets/NIKES/J1 blue.png","../../assets/NIKES/J1 blue.png"],
    "red":["../../assets/NIKES/j1.jfif"]},[38,39,40,41]);
let earBuds=new Product("Ear buds","retro blabla",3200,"PA",
{"#DDD9D5":["../../assets/Categories/ear buds.png"]})




let veste=new Clothe("Whtie Jacket","retro blabla",4000,"Mveste",
{"#DDD9D5":["../../assets/SubCategories/Shirts.jpg"]},["S",'M','XL']);

let boots=new Shoes("Boots","white winter boots",8900,"Mshoes",
{"#D1D1C3":["../../assets/Boots/boot1.jpg","../../assets/Boots/boot2.jpg","../../assets/Boots/boot3.jpg","../../assets/Boots/boot4.jpg"],
"#414179":["../../assets/Boots/boot5.jpg"],
"#6C2628":["../../assets/Boots/boot6.jpg","../../assets/Boots/boot7.jpg","../../assets/Boots/boot8.jpg"]
},[39,40,41])
let classic=new Shoes("Classic shoes","clasic sport shoes",6500,"Mshoes",
{
"#463E35":["../../assets/Classic/classic.jpg","../../assets/Classic/classic2.jpg","../../assets/Classic/classic3.jpg"],
},[39,40,41])
let addidas=new Shoes("Addidas triple white ","addidas shoes",5500,"Mshoes",
{
"#463E35":["../../assets/addidas/addidas1.jpg","../../assets/addidas/addidas2.jpg","../../assets/addidas/addidas3.jpg","../../assets/addidas/addidas4.jpg"],
"black":["../../assets/addidas/addidas5.jpg","../../assets/addidas/addidas6.jpg","../../assets/addidas/addidas7.jpg",],

},[39,40,41])

let jeans=new Clothe("JACK & JONES Jeans","jeans",3500,"Mpants",
{"#456184":["../../assets/jeans/jeans3.jpg","../../assets/jeans/jeans2.jpg","../../assets/jeans/jeans1.jpg"]}
,["S",'M','XL']);
let jeans2=new Clothe("Pepe Jeans Cash Jeans","jeans",3200,"Mpants",
{
"#4C5987":["../../assets/Pepe Jeans Cash Jeans/Pepe Jeans Cash Jeans 1.jpg","../../assets/Pepe Jeans Cash Jeans/Pepe Jeans Cash Jeans 2.jpg","../../assets/Pepe Jeans Cash Jeans/Pepe Jeans Cash Jeans 3.jpg"],
"#1E1E28":["../../assets/Pepe Jeans Cash Jeans/Pepe Jeans Cash Jeans 4.jpg"]
}
,["S",'M','XL']);
let survetement =new Clothe("Joggers","Joggers",2800,"Mpants",
{
"#181614":["../../assets/surevetement/survet1.jpg","../../assets/surevetement/survet2.jpg","../../assets/surevetement/survet3.jpg"],

}
,["S",'M','XL']);
let shirt =new Clothe("Tommy Hilfiger T-Shirt","shirts",3500,"Mshirts",
{
"#292123":["../../assets/T-shirt/Tommy Hilfiger T-Shirt1.jpg","../../assets/T-shirt/Tommy Hilfiger T-Shirt2.jpg","../../assets/T-shirt/Tommy Hilfiger T-Shirt3.jpg"],
"#DDD9D5":["../../assets/T-shirt/Tommy Hilfiger T-Shirt4.jpg","../../assets/T-shirt/Tommy Hilfiger T-Shirt5.jpg","../../assets/T-shirt/Tommy Hilfiger T-Shirt6.jpg"],
"#0B3498":["../../assets/T-shirt/Tommy Hilfiger T-Shirt7.jpg","../../assets/T-shirt/Tommy Hilfiger T-Shirt8.jpg","../../assets/T-shirt/Tommy Hilfiger T-Shirt9.jpg"],
"#DB0428":["../../assets/T-shirt/Tommy Hilfiger T-Shirt10.jpg","../../assets/T-shirt/Tommy Hilfiger T-Shirt11.jpg","../../assets/T-shirt/Tommy Hilfiger T-Shirt12.jpg"],
}
,["S",'M','XL']);

let veste2=new Clothe("Lined Bomber Jacket","retro blabla",7200,"Mveste",
{
"#0E0D0B":["../../assets/Jacket black/jacket1.jpg","../../assets/Jacket black/Jacket2.jpg","../../assets/Jacket black/Jacket3.jpg"],
"#E82134":["../../assets/Jacket black/Jacket5.jpg"],
"#657567":["../../assets/Jacket black/Jacket4.jpg"]
}
,["S",'M','XL']);


let Wshirt=new Clothe("Fall Sweater Shirts","Fall Sweater Shirts",7200,"Wshirts",
{
"#A0555F":["../../assets/Fall Sweater Shirts/Fall Sweater Shirts1.jpg"],
"#1C1B19":["../../assets/Fall Sweater Shirts/Fall Sweater Shirts2.jpg"],
"#2B6071":["../../assets/Fall Sweater Shirts/Fall Sweater Shirts3.jpg"]
}
,["S",'M','XL']);
let Wshoe=new Shoes("Court Shoes","Court Shoes",7200,"Wshoes",
{
"#AA9C8D":["../../assets/Court Shoes/Court Shoes1.jpg"],
"#20304A":["../../assets/Court Shoes/Court Shoes2.jpg"],
"#1F1B1D":["../../assets/Court Shoes/Court Shoes3.jpg"]
}
,[36,37,39]);
let Wdresse=new Clothe("Court Shoes","Court Shoes",7200,"Wdresses",
{
"#242424":["../../assets/dress/Gyabnw Winter Jumper Dresses1.jpg"],
"#1F433D":["../../assets/dress/Gyabnw Winter Jumper Dresses2.jpg"],
"#504F55":["../../assets/dress/Gyabnw Winter Jumper Dresses3.jpg"]
}
,["S",'M','XL']);
let Wbag=new Product("Michael Kors bag","Michael Kors bag",3200,"Wbags",
{
"#343434":["../../assets/Michael Kors bag/Michael Kors1.jpg"],
"#382C2C":["../../assets/Michael Kors bag/Michael Kors2.jpg"],
"#E2979D":["../../assets/Michael Kors bag/Michael Kors3.jpg"]
})
//#BABEC6
let Watch=new Product("Casio Adults Watch","Casio Collection Unisex Adults Watch AQ-230A",3200,"acc",
{
"#343434":["../../assets/Casio/Casio.jpg"],

})
let glasses=new Product("Tommy Hilfiger glasses","Tommy Hilfiger glasses",3200,"acc",
{
"black":["../../assets/Tommy Hilfiger glasses/Tommy Hilfiger glasses.jpg"],

})
let beanie=new Product("Knitted Beanie Hat","Tommy Hilfiger glasses",3200,"acc",
{
"#737174":["../../assets/beanie/beanie.jpg"],

})
let pc1=new pc("Gaming PC","Gaming Pc",110000,"PC",
{
    "white":["../../assets/pc/pc1.png"],
    
}    
,"ryzen 5 4650g","MSI B450","VEGA 7","16GB 3200MHZ")

let pc2=new pc("Gaming PC","Gaming Pc",160000,"PC",
{
    "white":["../../assets/pc/pc2.png"],
    
}    
,"ryzen 5 4650g","MSI B450","GTX 1650 TI","16GB 3200MHZ")

let pc3=new pc("Gaming PC","Gaming Pc",180000,"PC",
{
    "white":["../../assets/pc/pc3.png"],
    
}    
,"Intel I5 91000","MSI B450","RTX 3080","16GB 3200MHZ")
let pc4=new pc("Work PC","Work Pc",55000,"PC",
{
    "white":["../../assets/pc/pc4.png"],
    
}    
,"Intel I3 5600","MSI B450","intel","8GB 2200MHZ")
let laptop=new pc("Laptop","Gaming Pc",70000,"PC",
{
    "white":["../../assets/pc/laptop.png"],
    
}    
,"Intel I3 5600","MSI B450","intel","8GB 2200MHZ")
let monitor1=new Monitor("iMac Monitor","Monitor",70000,"PCM",
{
    "white":["../../assets/monitors/iMac monitor.png"],
    
}    
,1920,1080,144)

let monitor2=new Monitor("Pc Monitor","Monitor",70000,"PCM",
{
    "white":["../../assets/monitors/monitor1.png"],
    
}    
,1920,1080,144)


let monitor3=new Monitor("Pc Monitor","Monitor",70000,"PCM",
{
    "white":["../../assets/monitors/monitor2.png"],
    
}    
,1920,1080,144)

let monitor4=new Monitor("Pc Monitor","Monitor",70000,"PCM",
{
    "white":["../../assets/monitors/monitor3.png"],
    
}    
,1920,1080,144)
let case1=new Product("Iphone XR case","retro blabla",1200,"PA",
{"#FD3346":["../../assets/cases/xr.png"]})
let case2=new Product("Google Pixel 3 case","retro blabla",1200,"PA",
{"#7580DB":["../../assets/cases/pixel 3.png"]})
let puma=new Shoes("Puma White","retro blabla",9800,"Mshoes",
{"white":["../../assets/PUMA/1.jpg","../../assets/PUMA/2.jpg","../../assets/PUMA/3.jpg"]},[40,43])
this.products={
       "1":jordan1,
        "2":earBuds,
       
        "3":veste,
        "4":boots,
        "5":classic,
        "6":addidas,
        "7":jeans,
        "8":jeans2,
        "9":survetement,
        "10":shirt,
        "11":veste2,
        "12":Wshirt,
        "13":Wshoe,
        "14":Wdresse,
        "15":Wbag,
        "16":Watch,
        "17":glasses,
        "18":beanie,
        "19":pc1,
        "20":pc2,
        "21":pc3,
        "22":pc4,
        "23":laptop,
        "24":monitor1,
        "25":monitor2,
        "26":monitor3,
        "27":monitor4,
        "28":case1,
        "29":case2,
        "30":puma,

}





















    this.users={
        "mohamedsennia@gmail.com":"123456789"
    }
    this.SubCategories={
        "Mshoes":new SubCategorie("Mshoes","Shoes","shoes.png","men-C"),
        "Mshirts":new SubCategorie("Mshirts","Shirts","Shirts.jpg","men-C"),
        "Mpants": new SubCategorie("Mpants","Pants","Pants.jpg","men-C"),
        "Mveste": new SubCategorie("Mveste","vestes","Pants.jpg","men-C"),
        "Wshirts":new SubCategorie("Wshirts","Shirts","Shirts.jpg","women-C"),
        "Wshoes":new SubCategorie("Wshoes","Shoes","shoes.png","women-C"),
        "Wbags":new SubCategorie("Wbags","Bags","bags.png","women-C"),
        "Wdresses":new SubCategorie("Wdresses","Dresses","shoes.png","women-C"),
        //"CS":new Categorie("CS","Informatique","PC.png")
        "PC":new SubCategorie("PC","Computres","PC.png","CS"),
        "PCM":new SubCategorie("PCM","Monitors","PC.png","CS")
    }   

    }
    getAllCategories(){
        return  Object.assign({},this.categories)
    }
    getAllProducts(){
        return  Object.assign({},this.products)
    }
    getProductsByCategorie(categorie:String){
        let categorieProducts:Product[]=null
        if(Object.keys(this.categories).indexOf(categorie as string)!=-1){
        let subCategories=[];
        for (let subcat in this.SubCategories){
            if(this.SubCategories[subcat].getCategorie()==categorie){
                subCategories.push(this.SubCategories[subcat].getId());
            }
        }
         categorieProducts=[];
        for(let key in this.products){
            if(this.products[key].getCategorie()==categorie||subCategories.indexOf(this.products[key].getCategorie())!=-1){
                categorieProducts.push(this.products[key])
            }
        }
    }
        return categorieProducts;
    }
    getProductsBySubCategorie(subCategorie:string){
        let categorieProducts:Product[]=[];
        for(let key in this.products){
            if(this.products[key].getCategorie()==subCategorie){
                categorieProducts.push(this.products[key])
            }
        }
        return categorieProducts;
    }
    getProductById(id:string){
        return this.products[id];
    }
    login(email:string,password:string){
        if(this.users[email]==password){
           
            return true;
        }
        
return false;
    }
    getSubCategoriesByCategorie(catgorie:string){
        
        let subCategories:SubCategorie[]=[];
        for(let sub in this.SubCategories){
            
            if(this.SubCategories[sub].getCategorie()==catgorie){
                subCategories.push(this.SubCategories[sub])
            }
        }
        console.log(subCategories)
        return subCategories
    }
    search(query:string){
       let products=[   ];
       for(let key in this.products){
        //console.log(this.products[key].getName())
        if(this.products[key].getName().toLowerCase().includes(query.toLowerCase())){
            products.push(this.products[key])
        }
       }
       return products
    }
}