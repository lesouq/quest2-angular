import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 

  name = "Doe";
  firstName = "John";
  age = "25";
  quote = "";
  imageSrc = "https://randomuser.me/api/portraits/lego/2.jpg";

  constructor() {}

  ngOnInit(): void {
  }

  /* afficher / masquer age*/
  showMe:boolean=false

  toogleTag()
  {
    this.showMe=!this.showMe
  }
}
