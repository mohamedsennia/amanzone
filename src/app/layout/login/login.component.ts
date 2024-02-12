import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { FakeApiService } from '../../Api/fakeApi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
LoginForm:FormGroup;
failedLogin=false;
constructor(private fakeApiService:FakeApiService,private router:Router){

}
ngOnInit(): void {
  this.LoginForm=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null)
  
  });
}
onSubmit(){
  this.failedLogin=!this.fakeApiService.login(this.LoginForm.get("email").value,this.LoginForm.get("password").value)
  if(!this.failedLogin){
    sessionStorage.setItem("loged","true")
 this.router.navigate(["/account/purches"]);
  }else{

  }

}
}
