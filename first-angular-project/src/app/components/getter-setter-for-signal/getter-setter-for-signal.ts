import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-getter-setter-for-signal',
  imports: [FormsModule],
  templateUrl: './getter-setter-for-signal.html',
  styleUrl: './getter-setter-for-signal.css',
})
export class GetterSetterForSignal {
  
  name = signal("Bishwanath Paul")

  userData = signal({
    email: "bishwa@gmail.com",
    college: "Crazy UNI",
    address: "Earth"
  })

  get uName() {
    return this.name();
  }

  set uName(val:string) {
    this.name.set(val)
  }

  get userAddress() {
    return this.userData().address
  }

  set userAddress(val:string) {
    this.userData.update((item)=> ({...item, address: val}))
  }
}
