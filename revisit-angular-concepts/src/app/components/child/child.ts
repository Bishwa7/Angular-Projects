import { Component, computed, input, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  
  // OLD syntax this turns a signal to a normal property (not optimized & not recommended)
  // @Input() userName:string | undefined;

  userName = input<string>();

  greetings = computed(()=> {
    const name = this.userName

    if(!name){
      return "Hello, Guest!"
    }

    return `Hello, ${name()}`
  })
}
