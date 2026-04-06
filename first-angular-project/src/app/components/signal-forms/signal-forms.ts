import { Component, signal } from '@angular/core';
import { email, form, maxLength, minLength, required, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-forms',
  imports: [FormField],
  templateUrl: './signal-forms.html',
  styleUrl: './signal-forms.css',
})
export class SignalForms {

  loginModel = signal({
    email: "",
    password: ""
  })

  loginForm = form(this.loginModel, (field) => {
    required(field.email, {message: "Email is required."});
    email(field.email, {message: "Enter a valid Email."});

    required(field.password, {message: "Password is required."});
    minLength(field.password, 5, {message: "Password should at least contain 5 characters."});
    maxLength(field.password, 8, {message: "Password length should not be more than 8 characters."});
  })

  handleSubmit() {
    this.loginForm.email().markAsTouched();
    this.loginForm.password().markAsTouched();

    if (this.loginForm.email().invalid() || this.loginForm.password().invalid()) {
      return;
    }

    console.log('Email:', this.loginForm.email().value());
    console.log('Password:', this.loginForm.password().value());
  }

  resetForm() {
    this.loginForm.email().value.set("")
    this.loginForm.password().value.set("")
  }
}
