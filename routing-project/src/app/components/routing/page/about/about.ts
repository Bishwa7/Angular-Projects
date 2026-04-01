import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  user = signal({
    id: 0,
    name: ""
  })

  constructor(public route: ActivatedRoute){}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params)

      this.user.set({
        id: params['id'],
        name: params['name']
      })
    })
  }
}
