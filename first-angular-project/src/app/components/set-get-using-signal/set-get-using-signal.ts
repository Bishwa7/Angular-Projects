import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-set-get-using-signal',
  imports: [],
  templateUrl: './set-get-using-signal.html',
  styleUrl: './set-get-using-signal.css',
})
export class SetGetUsingSignal {
  
  data : WritableSignal<string> = signal<string>("")

  setDefault() {
    this.data.set("Bishwanath Paul")
  }
  
  updateData(val:string) {
    this.data.set(val)
  }

}
