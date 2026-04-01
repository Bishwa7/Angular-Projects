import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {}
