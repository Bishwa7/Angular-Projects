import { Component, signal } from '@angular/core';
import { ContactService } from '../../../../services/contact/contact-service';
import { Route, Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})


export class Contact {

  userData = signal<{id:number, name:string, email:string, age:number}[]>([])

  constructor(public user:ContactService, public route:Router){}

  ngOnInit() {
    const data =this.user.contactList()

    this.userData.set(data)
  }


  
}
