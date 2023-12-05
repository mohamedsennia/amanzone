import { Injectable } from "@angular/core";
import { Categorie } from "./Categorie.model";

@Injectable({providedIn:"root"})
export class CategorieService{
categories:Categorie[]=[
    new Categorie("Vêtements Homme",'Men.jpg'),
    new Categorie("Vêtements Femme","Women.png"),
    new Categorie("Véhicules","Audi.png"),
    new Categorie("Vêtements Bébé","Baby.png"),
    new Categorie("Accessoires","Watch.png"),
    new Categorie("Immobiliers","House.png"),

    new Categorie("Téléphone","Phone.png"),
    new Categorie("Accessoires de téléphone","Air pods.png"),
    new Categorie("Informatique","PC.png")
]
}
//categories:String[]=["Voitures","Vêtements Bébé","Accessoires","Immobiliers","Véhicules","Téléphone","Accessoires de téléphone","Informatique"]