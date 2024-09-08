import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects = [
    { name: 'NASA Space trips API', description: 'Nasa SpaceX API built using MERN stack Technologies for launching missions scheduling', link: 'https://github.com/AmeerHeiba/Nasa-Project' },
    { name: 'Netflex Clone', description: 'A Netflix clone built using MERN stack technologies', link: 'https://github.com/AmeerHeiba/GP-MEARN-ITI-MANS' }
  ];
}
