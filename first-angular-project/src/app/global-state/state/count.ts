import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Count {
  count = signal(0)

  increamentCount() {
    return this.count.update((c) => c + 1)
  }

  decreamentCount() {
    return this.count.update((c) => c - 1)
  }

  resetCount() {
    return this.count.set(0)
  }
}
