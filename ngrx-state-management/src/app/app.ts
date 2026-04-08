import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { decreament, increament, reset } from '../store/counter.actions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(private store : Store){}


  inc() {
    this.store.dispatch(increament())
  }

  dec() {
    this.store.dispatch(decreament())
  }

  resetCounter() {
    this.store.dispatch(reset())
  }


}
