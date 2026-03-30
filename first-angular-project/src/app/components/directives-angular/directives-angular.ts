import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-angular',
  imports: [CommonModule],
  templateUrl: './directives-angular.html',
  styleUrl: './directives-angular.css',
})
export class DirectivesAngular {


  // *ngFor
  users = ["Bishwanath", "Cristiano", "Sergio", "Gareth", "Marcelo"]


  usersData = [
    {
      name: "Bishwanath",
      age: 20,
      email: "bishwa@gmail.com"
    },
    {
      name: "Cristiano",
      age: 20,
      email: "cristiano@gmail.com"
    },
    {
      name: "Sergio",
      age: 20,
      email: "sergio@gmail.com"
    },
    {
      name: "Gareth",
      age: 20,
      email: "gareth@gmail.com"
    }
  ]




  // *ngIf

  login = false;

  handleLogin() {
    return this.login = !this.login;
  }

  block = 0;

  changeBlock(val: number) {
    this.block = val;
  }


  // *ngSwitch

  color="black"

  handleChange(event:Event){
    const target = event.target as HTMLSelectElement;

    this.color=target.value;

  }

  
}
