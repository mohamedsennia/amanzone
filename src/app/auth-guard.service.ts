import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AppService } from "./app.service";

@Injectable({"providedIn":'root'})
export class AuthGuardService implements CanActivate{
    constructor(private router:Router,private appService:AppService){
        
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  | Observable<boolean> | Promise<boolean> {
        
        if(this.appService.isLogedIn()){
           
            return true
        }else{
            this.router.navigate(['login']);
        }
        return false;
        
    }

}