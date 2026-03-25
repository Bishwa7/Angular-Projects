import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-set-update-datatypes-for-signal',
  imports: [],
  templateUrl: './set-update-datatypes-for-signal.html',
  styleUrl: './set-update-datatypes-for-signal.css',
})
export class SetUpdateDatatypesForSignal {

  data:WritableSignal<string> = signal<string>("Bishwanath")

  names : string[] = ["Bishwanath", "Cristiano", "Ronaldo", "CR7", "Bishwanath Paul", "Paradox"] 


  fruits = signal(["apple", "banana", "pineapple", "orange"])
  newFruit : string = "";

  speed : Signal<number> = computed(()=> 90)

  updateData() {
    const randomIndex = Math.floor(Math.random() * this.names.length)
    this.data.set(this.names[randomIndex])
  }

  addToFruits() {
    if(this.newFruit.trim()) {
      this.fruits.update((item) => [...item, this.newFruit])
      this.newFruit = "";

      console.log(this.fruits())
    }
    console.log(this.fruits())
  }


}
