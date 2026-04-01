import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  constructor(public route : ActivatedRoute) {}

  user = signal({
    id: 0,
    name: "",
    age: 0
  })

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params)

      this.user.set({
        id: Number(params['id']),
        name: String(params['name']),
        age: Number(params['age'])
      })
    })
  }
}
