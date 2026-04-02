import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lazy-parent',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './lazy-parent.html',
  styleUrl: './lazy-parent.css',
})
export class LazyParent {}
