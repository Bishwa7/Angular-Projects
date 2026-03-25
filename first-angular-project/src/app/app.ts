import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './components/profile/profile';
import { Events } from './components/events/events';
import { PropertyBinding } from './components/property-binding/property-binding';
import { ComputedSignal } from './components/computed-signal/computed-signal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Profile, Events, PropertyBinding, ComputedSignal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-project');

  myname = "Bishwanath Paul"
}
