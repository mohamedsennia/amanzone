import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
categories:String[]=["Voitures","Vêtements Homme","Vêtements Femme","Vêtements Bébé","Accessoires","Immobiliers","Véhicules","Téléphone","Accessoires de téléphone","Informatique"]
}
