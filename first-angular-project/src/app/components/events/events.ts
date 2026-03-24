import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {

  handleChange(event:any) {
    const input = event.target as HTMLInputElement;
    console.log(input.value)
  }


  eventNameFunc(event:string) {

    console.log(event)
  }
}
