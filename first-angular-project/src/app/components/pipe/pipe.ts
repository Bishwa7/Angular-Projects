import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pipe',
  imports: [CommonModule],
  templateUrl: './pipe.html',
  styleUrl: './pipe.css',
})
export class Pipe {

  heading = "pipe in angular 21"

  name = signal("Bishwanath Paul")

  money = signal(10000)

  dateVar = signal(new Date())

  profile = signal({name: "Bishwanath", email: "bishwa@gmail.com", age:25, address: "Earth"})

  users = signal([
    {name:"Bishwanath", email: "bishwa@gmail.com", address: "India"},
    {name:"Cristiano", email: "ronaldo@gmail.com", address: "Portugal"},
    {name:"Gareth", email: "bale@gmail.com", address: "Wales"},
    {name:"Sergio", email: "ramos@gmail.com", address: "Spain"}
  ])
}
