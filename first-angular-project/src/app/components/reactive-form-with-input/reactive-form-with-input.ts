import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-with-input',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-with-input.html',
  styleUrl: './reactive-form-with-input.css',
})
export class ReactiveFormWithInput {

  email = new FormControl("")
  password = new FormControl("")

  submit() {
    console.log(this.email.value, this.password.value)
  }

  reset() {
    this.email.setValue("")
    this.password.setValue("")

  }
}
