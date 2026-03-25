import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-app-using-signal',
  imports: [],
  templateUrl: './counter-app-using-signal.html',
  styleUrl: './counter-app-using-signal.css',
})
export class CounterAppUsingSignal {

  count = signal<number>(0);


  decreamentCount() {
    if(this.count() <= 0) {
      return;
    }

    this.count.set(this.count() - 1)
  }

  resetCount() {
    if(this.count() != 0)
    {
      this.count.set(0)
    }
  }

  increamentCount() {
    this.count.update((val) => val + 1)
  }
}
