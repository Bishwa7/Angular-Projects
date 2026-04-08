import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { formFeature } from './form/form.feature';
import { resetForm, updateFormField } from './form/form.actions';

interface FormType {
  name: string;
  email: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // form$ : Observable<FormType>;

  // constructor(private store: Store){
  //   this.form$ = this.store.select(formFeature.selectFormState)
  // }

  private store = inject(Store)

  form$ = this.store.select(formFeature.selectFormState)

  onFieldChange(field: ('name' | 'email'), value: string) {
    this.store.dispatch(updateFormField({field, value}))
  }

  resetFormFunc() {
    this.store.dispatch(resetForm())
  }
}
