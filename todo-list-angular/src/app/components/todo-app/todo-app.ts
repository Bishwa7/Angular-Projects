import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  imports: [],
  templateUrl: './todo-app.html',
  styleUrl: './todo-app.css',
})
export class TodoApp {

  tasks = signal([
    {id: 1, taskName: "Gym", completed: false}
  ])

  title = signal("")

  addTask() {
    console.log(this.title())

    if(this.title().trim()) {
      this.tasks.update((item) => ([...item, {id: this.tasks().length , taskName: this.title(), completed:false }]))
    }
    
    this.title.set("")
  }

}
