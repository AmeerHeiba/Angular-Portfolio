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
    { name: 'HTML & CSS', description: 'Proficient in creating well-structured, semantic web pages and implementing responsive, visually appealing designs using CSS.' },
    { name: 'JavaScript', description: 'Strong command of JavaScript for both frontend and backend development, leveraging modern ES6+ features and frameworks.' },
    { name: 'TypeScript', description: 'Experienced in using TypeScript for type-safe, scalable JavaScript applications, enhancing code quality and maintainability.' },
    { name: 'XML', description: 'Knowledgeable in using XML for data exchange and configuration in various web technologies and APIs.' },
    { name: 'Backend Development', description: 'Proficient in Node.js and Express.js for building robust, scalable server-side applications.' },
    { name: 'Frontend Development', description: 'Skilled in modern JavaScript frameworks, including React.js (with Redux for state management) and Angular, for creating dynamic, responsive user interfaces.' },
    { name: 'Databases', description: 'Experienced in working with both SQL and NoSQL databases, including MongoDB (with Mongoose), MySQL, and PostgreSQL, ensuring efficient data storage and retrieval.' },
    { name: 'ORM & Query Languages', description: 'Hands-on experience with Sequelize for relational database management and GraphQL for querying APIs.' },
    { name: 'DevOps & CI/CD', description: 'Proficient in Docker for containerization and GitHub Actions for automating workflows, ensuring smooth deployment pipelines.' },
    { name: 'Version Control', description: 'Strong experience using Git for version control, enabling efficient collaboration and project management.' },
    { name: 'Templating & View Engines', description: 'Skilled in using templating engines like EJS for dynamic content rendering in web applications.' },
    { name: 'Operating Systems', description: 'Comfortable working in Linux environments for development, deployment, and system management.' },
    { name: 'Self-Learning', description: 'Ability to quickly adapt to new technologies and independently acquire knowledge, keeping pace with the latest industry trends.' },
    { name: 'Technical Documentation', description: 'Proficient in writing clear, concise, and detailed technical documents for efficient team collaboration and project understanding.' },
    { name: 'Presentation Skills', description: 'Skilled in delivering engaging and informative presentations to both technical and non-technical audiences.' },
    { name: 'Communication', description: 'Strong interpersonal communication skills, with the ability to work effectively in teams and articulate complex ideas in a simple, understandable manner.' },
    { name: 'Leadership', description: 'Experienced in leading projects and mentoring team members, fostering a collaborative and productive environment.' },
    { name: 'Decision Making', description: 'Adept at analyzing situations, weighing options, and making strategic decisions to ensure project success.' },
    { name: 'Critical Thinking', description: 'Strong analytical skills to evaluate problems, identify patterns, and make logical decisions based on evidence.' },
    { name: 'Problem Solving', description: 'Effective at identifying challenges, thinking creatively, and developing innovative solutions to overcome obstacles.' }
  ];
}
