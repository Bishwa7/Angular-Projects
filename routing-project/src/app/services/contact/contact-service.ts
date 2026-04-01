import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  contacts = signal([
    {id:1, name: "Bishwanath Paul", email: "bishwa@gmail.com", age:25},
    {id:2, name: "Cristiano", email: "ronaldo@gmail.com", age:41},
    {id:3, name: "Gareth", email: "bale@gmail.com", age:36},
    {id:4, name: "Sergio", email: "ramos@gmail.com", age:40},
  ])


  contactList() {

    return this.contacts(); 
  }
}
