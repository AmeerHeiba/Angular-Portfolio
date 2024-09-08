import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';  
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeroComponent, AboutComponent, SkillsComponent, PortfolioComponent, FooterComponent], 
  standalone: true,
})

export class AppComponent {
  title = 'my-first-app';
}
