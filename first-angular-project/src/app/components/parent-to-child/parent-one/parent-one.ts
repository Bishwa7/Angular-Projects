import { Component, signal } from '@angular/core';
import { ChildOne } from '../child-one/child-one';

@Component({
  selector: 'app-parent-one',
  imports: [ChildOne],
  templateUrl: './parent-one.html',
  styleUrl: './parent-one.css',
})
export class ParentOne {

  users = signal(["Bishwanath", "Cristiano", "Ronaldo", "Gareth", "Marcelo", "Sergio"])

  newUser = signal("")


  handleSubmit() {
    const user = this.newUser().trim();

    if(!user) {
      return;
    }

    const alreadyExists = this.users().includes(user)
    if(alreadyExists) {
      return;
    }

    this.users.update((data) => ([...data, this.newUser() ]))
    this.newUser.set("")
  }

  deleteUser(name:string) {
    console.log(name);

    this.users.update((data) => data.filter((item) => item != name) )
  }
}
