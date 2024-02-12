import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amane-zone2';
  constructor(private appService:AppService){
   let state=sessionStorage.getItem("loged")
    if(state){
      if(state==="false"){
        this.appService.logOff()
      }else{
        this.appService.logIn()
      }
    }else{
      this.appService.logOff()
    }
    
  }
}
