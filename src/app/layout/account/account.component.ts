import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  section
constructor(private route:ActivatedRoute){
this.route.params.subscribe(param=>{
  this.section=param["section"]
})
}
}
