import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/counter.actions';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AppState, selectFeatureCount } from '../store/counter.selectors';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  counter$! : Observable<number>;

  constructor(private store : Store<AppState>){
    this.counter$ = this.store.select(selectFeatureCount)
  }


  inc() {
    this.store.dispatch(increment())
  }

  dec() {
    this.store.dispatch(decrement())
  }

  resetCounter() {
    this.store.dispatch(reset())
  }


}
