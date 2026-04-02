import { Component, inject, signal } from '@angular/core';
import { ContactService } from '../../../../services/contact/contact-service';
import { ActivatedRoute } from '@angular/router';

type ContactType = {
  id: number;
  name: string;
  email: string;
  age: number;
};


@Component({
  selector: 'app-contact-details',
  imports: [],
  templateUrl: './contact-details.html',
  styleUrl: './contact-details.css',
})
export class ContactDetails {
  readonly details = inject(ContactService);
  // readonly route = inject(ActivatedRoute);

  readonly userData = signal<ContactType>({id:0, name: "", email: "", age:0})
  
  constructor(public route : ActivatedRoute){}

  ngOnInit() {
    const data = this.details.contactList()

    this.route.params.subscribe((params)=> {

      const filteredData = data.filter((item) => item.id == params['id'])

      this.userData.set(filteredData[0])
    })

  }
}
