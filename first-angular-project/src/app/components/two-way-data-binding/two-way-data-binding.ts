import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-data-binding',
  imports: [FormsModule],
  templateUrl: './two-way-data-binding.html',
  styleUrl: './two-way-data-binding.css',
})


export class TwoWayDataBinding {
  name = signal("Bishwanath")

  age:number = 20


  user = signal({
    age: 20,
    name: "Bishwanath Paul",
    email: "bishwa@gmail.com"
  })

  handleInput(key:string, value:string) {
    this.user.update((item) => ({...item, [key]: key === "age" ? Number(value) : value}))
  }
}
