import { Component } from '@angular/core';
import { CategorieService } from '../../Categories/Categories.service';
import { Categorie } from '../../Categories/Categorie.model';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  categories:Categorie[]=[];
  isOpen:boolean;
  constructor(private categoriesService:CategorieService,private appService:AppService ){
    this.isOpen=false;
    this.categories=categoriesService.getCategories();
    appService.ToggleBurger.subscribe(param=>{
      this.isOpen=param;
    });
  }
  close(){
    this.appService.ToggleBurger.next(false)
  }
  isLoged(){
   return !this.appService.isLogedIn()
  }
}
