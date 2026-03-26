import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './components/profile/profile';
import { Events } from './components/events/events';
import { PropertyBinding } from './components/property-binding/property-binding';
import { ComputedSignal } from './components/computed-signal/computed-signal';
import { EffectForSignal } from './components/effect-for-signal/effect-for-signal';
import { SetUpdateDatatypesForSignal } from './components/set-update-datatypes-for-signal/set-update-datatypes-for-signal';
import { CounterAppUsingSignal } from './components/counter-app-using-signal/counter-app-using-signal';
import { SetGetUsingSignal } from './components/set-get-using-signal/set-get-using-signal';
import { ControlFlowToggle } from './components/control-flow-toggle/control-flow-toggle';
import { ForLoop } from './components/for-loop/for-loop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Profile, Events, PropertyBinding, ComputedSignal, EffectForSignal, SetUpdateDatatypesForSignal, CounterAppUsingSignal, SetGetUsingSignal, ControlFlowToggle, ForLoop],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-project');

  myname = "Bishwanath Paul"
}
