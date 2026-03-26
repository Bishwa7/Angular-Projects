import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  imports: [],
  templateUrl: './switch-case.html',
  styleUrl: './switch-case.css',
})
export class SwitchCase {

  status= signal<string>("notStarted");

  handleStatusChange(val:Event) {
    const target = val.target as HTMLSelectElement;
    this.status.set(target.value);
  }
}
