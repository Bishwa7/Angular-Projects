import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed-signal',
  imports: [],
  templateUrl: './computed-signal.html',
  styleUrl: './computed-signal.css',
})
export class ComputedSignal {

  width = signal(10);
  height = signal(100);
  
  area = computed(() => this.height() * this.width())

  increaseHeight() {
    this.height.set(this.height() + 10)
  }
}
