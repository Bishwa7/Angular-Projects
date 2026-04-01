import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(public router:Router){}

  users = signal({id:1, name: "Bishwanath Paul", age:25})

  goTOProfile() {
    this.router.navigate(["profile"])
  }

  goTOProfileQuery() {
    this.router.navigate(['profile'], {
      queryParams:{
        id: this.users().id,
        name: this.users().name,
        age: this.users().age
      }
    })
  }

  goTOProfileRoute() {
    this.router.navigate(['about', this.users().id, this.users().name])
  }

}
