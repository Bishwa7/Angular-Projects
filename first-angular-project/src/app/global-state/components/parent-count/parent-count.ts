import { Component } from '@angular/core';
import { DisplayCount } from '../display-count/display-count';
import { ControlCount } from '../control-count/control-count';

@Component({
  selector: 'app-parent-count',
  imports: [DisplayCount, ControlCount],
  templateUrl: './parent-count.html',
  styleUrl: './parent-count.css',
})
export class ParentCount {}
