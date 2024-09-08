import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  name = 'Ameer Heiba';
  jobTitle = 'MERN | MEAN Stack Developer';
  imagelink = "assets/images/profile.jpeg";
}

