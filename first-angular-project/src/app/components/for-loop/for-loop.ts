import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  imports: [],
  templateUrl: './for-loop.html',
  styleUrl: './for-loop.css',
})
export class ForLoop {

  users = signal(["Bishwanath", "Cristiano", "Sergio", "Gareth", "Marcelo"])


  names = signal([
    {id: 1, name: "Bishwanath", lastName: "Paul", email: "bishwa@gmail.com"},
    {id: 2, name: "Cristiano", lastName: "Ronaldo", email: "Suiiiiiii@gmail.com"},
    {id: 3, name: "Sergio", lastName: "Ramos", email: "sergio@gmail.com"},
    {id: 4, name: "Gareth", lastName: "Bale", email: "gareth@gmail.com"},
    {id: 1, name: "Marcelo", lastName: "Da Silva", email: "marcelo.com"}
  ])
}
