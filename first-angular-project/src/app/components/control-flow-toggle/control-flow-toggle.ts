import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-control-flow-toggle',
  imports: [],
  templateUrl: './control-flow-toggle.html',
  styleUrl: './control-flow-toggle.css',
})
export class ControlFlowToggle {

  isLogin: WritableSignal<boolean> = signal<boolean>(false)

  show = signal<boolean>(false)

  status = signal<string>("notStarted")


  userLogin(val : boolean) {
    this.isLogin.set(val)
  }

  handleStatusChange(event:Event) {
    const target = event.target as HTMLSelectElement;
    this.status.set(target.value)
  }

}
