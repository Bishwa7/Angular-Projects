import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effect-for-signal',
  imports: [],
  templateUrl: './effect-for-signal.html',
  styleUrl: './effect-for-signal.css',
})
export class EffectForSignal {

  speed = signal(0);
  color = "black";

  fruit = signal("apple")

  fruits : string[] = ["apple", "banana", "watermelon", "mango", "dragon fruit", "tomamto", "orange", "pineapple"];

  constructor() {
    effect(() => {
      if(this.speed() >0 && this.speed() <= 80)
      {
        this.color = "green"
      }
      else if(this.speed() > 80 && this.speed() < 120) 
      {
        this.color = "orange"
      }
      else if(this.speed() >= 120) {
        this.color = "red"
      }

      console.log(this.speed())
    })


    effect(() => {
      console.log(this.fruit())
    })

  }



  increaseSpeed() {
    this.speed.set(this.speed() + 10)
  }

  changeFruit() {
    const randomIndex = Math.floor(Math.random() * this.fruits.length)
    this.fruit.set(this.fruits[randomIndex])
  }
}
