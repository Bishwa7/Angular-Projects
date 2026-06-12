import { Component, signal } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {

  users = signal(["Bishwanath", "Cristiano", "Gareth", "Marcelo", "Ramos"])
  newUser = signal("")

  addUser(){
    if(this.newUser().trim()){
      this.users.update((data)=> ([...data, this.newUser()]))  
    }
    this.newUser.set("")
  }

  delUser(indexToRemove: number) {
    console.log(`Removing Index : ${indexToRemove} `)
    this.users.update((data)=>(data.filter((item, i)=> i != indexToRemove)))
  }
}
