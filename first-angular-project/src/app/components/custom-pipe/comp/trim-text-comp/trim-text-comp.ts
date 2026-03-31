import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TrimTextPipePipe } from '../../pipe/trim-text-pipe-pipe';

@Component({
  selector: 'app-trim-text-comp',
  imports: [CommonModule, TrimTextPipePipe],
  templateUrl: './trim-text-comp.html',
  styleUrl: './trim-text-comp.css',
})
export class TrimTextComp {

  text = signal("My name is Monkey D. Lufffy and I am going to be the King of Pirates.")
}
