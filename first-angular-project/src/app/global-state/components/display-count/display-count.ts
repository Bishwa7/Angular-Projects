import { Component } from '@angular/core';
import { Count } from '../../state/count';

@Component({
  selector: 'app-display-count',
  imports: [],
  templateUrl: './display-count.html',
  styleUrl: './display-count.css',
})
export class DisplayCount {

  constructor(public state: Count) {}
}
