import { Injectable } from "@angular/core";
import { FakeApiService } from "./Api/fakeApi.service";
import { Observable, Subject } from "rxjs";

@Injectable({"providedIn":'root'})
export class AppService{
    logedIn:boolean=false
     ToggleBurger:Subject<boolean>= new Subject<boolean>();
    logIn(){
        this.logedIn=true
        
    }
    logOff(){
        this.logedIn=false;
    }
    isLogedIn(){
       
        return this.logedIn;
    }

}