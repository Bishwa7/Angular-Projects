import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  compName = "Profile Component"

  count = signal<number>(0);


  callMe() {
    alert("Button Alert")
  }

  counter() {
    const intervalId = setInterval(() => {
      this.count.update((prev) => prev + 1);
      console.log(this.count());
      
      if(this.count() % 5 === 0 ){
        clearInterval(intervalId)
        console.log("Counter Stopped")
      }
    }, 1000);
  }
}
