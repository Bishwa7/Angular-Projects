import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-with-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-with-forms.html',
  styleUrl: './reactive-form-with-forms.css',
})
export class ReactiveFormWithForms {

  loginForm = new FormGroup({
    name : new FormControl("", [Validators.required]),
    email : new FormControl("", [Validators.required, Validators.email]),
    password : new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(8)])
  })

  get name() {
    return this.loginForm.get("name")
  }

  get email() {
    return this.loginForm.get("email")
  }

  get password() {
    return this.loginForm.get("password")
  }  

  handleSubmit() {
    if(this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return ;
    }
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
