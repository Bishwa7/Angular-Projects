import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-one',
  imports: [],
  templateUrl: './child-one.html',
  styleUrl: './child-one.css',
})
export class ChildOne {

  @Input() user!: string ;
  @Output() deleteUser = new EventEmitter();

  whichUser(name : string) {
    this.deleteUser.emit(name)
  }
}
