import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-with-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-with-forms.html',
  styleUrl: './reactive-form-with-forms.css',
})
export class ReactiveFormWithForms {

  loginForm = new FormGroup({
    name : new FormControl(""),
    email : new FormControl(""),
    password : new FormControl("")
  })

  handleSubmit() {
    console.log(this.loginForm.value)
  }

  resetForm() {
    this.loginForm.setValue({
      name: "",
      email: "",
      password: ""
    })
  }
}
