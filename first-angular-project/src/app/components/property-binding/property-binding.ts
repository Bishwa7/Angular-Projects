import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css',
})
export class PropertyBinding {
  inputReadOnly : boolean = true;

  toggleInput() {
    this.inputReadOnly = !this.inputReadOnly;
  }
}
