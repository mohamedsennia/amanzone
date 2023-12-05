
import { Component } from '@angular/core';
import { Categorie } from '../Categories/Categorie.model';
import { CategorieService } from '../Categories/Categories.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
public categories:Categorie[];
constructor(private categorieService:CategorieService){
  this.categories=categorieService.categories;
}
getImage(categorie:Categorie){
  return "background-image: url('"+categorie.getImage()+"')"
}
}
