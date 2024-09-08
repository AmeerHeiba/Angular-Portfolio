import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    { name: 'HTML & CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'XML', level: 70 },
    { name: 'Backend Development', level: 75 },
    { name: 'Frontend Development', level: 85 },
    { name: 'Databases', level: 80 },
    { name: 'ORM & Query Languages', level: 70 },
    { name: 'DevOps & CI/CD', level: 75 },
    { name: 'Version Control', level: 80 },
    { name: 'Templating & View Engines', level: 65 },
    { name: 'Operating Systems', level: 70 },
    { name: 'Self-Learning', level: 85 },
    { name: 'Technical Documentation', level: 75 },
    { name: 'Presentation Skills', level: 70 },
    { name: 'Communication', level: 80 },
    { name: 'Leadership', level: 70 },
    { name: 'Decision Making', level: 75 },
    { name: 'Critical Thinking', level: 80 },
    { name: 'Problem Solving', level: 85 }
  ];
  
}
