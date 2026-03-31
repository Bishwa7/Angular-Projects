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
import { SwitchCase } from './components/switch-case/switch-case';
import { TwoWayDataBinding } from './components/two-way-data-binding/two-way-data-binding';
import { GetterSetterForSignal } from './components/getter-setter-for-signal/getter-setter-for-signal';
import { DirectivesAngular } from './components/directives-angular/directives-angular';
import { ParentOne } from './components/parent-to-child/parent-one/parent-one';
import { ParentCount } from './global-state/components/parent-count/parent-count';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Profile, Events, PropertyBinding, ComputedSignal, EffectForSignal, SetUpdateDatatypesForSignal, CounterAppUsingSignal, SetGetUsingSignal, ControlFlowToggle, ForLoop, SwitchCase, TwoWayDataBinding, GetterSetterForSignal, DirectivesAngular, ParentOne, ParentCount],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-project');

  myname = "Bishwanath Paul"
}
