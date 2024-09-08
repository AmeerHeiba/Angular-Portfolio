import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  bio = ' Passionate and driven junior MERN stack developer with a solid foundation in developing dynamic and responsive web applications.';
  education = 'B.Sc. in Computer Science';
  experience = '1 year of experience in web development...';

  downloadCV() {
    window.open('assets/AmeerHeiba_CV.pdf', '_blank');
  }
}
