import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../atoms/card/card.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { Course } from '../../../core/models/course.model';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, RouterLink, CardComponent, ButtonComponent],
  template: `
    <app-card>
      <h3>{{ course.name }}</h3>
      <p>{{ course.description }}</p>
      <div class="course-info">
        <span>⏱️ {{ course.duration }} min</span>
        <span *ngIf="course.badge">🏆 {{ course.badge.name }}</span>
        <span>📚 {{ course.modules && course.modules.length || 0 }} módulos</span>
      </div>
      <a [routerLink]="['/courses', course.id]">
        <app-button variant="primary">Ver Curso</app-button>
      </a>
    </app-card>
  `,
  styles: [`
    h3 {
      margin-bottom: 10px;
      color: #333;
    }
    p {
      color: #666;
      margin-bottom: 15px;
    }
    .course-info {
      display: flex;
      gap: 15px;
      margin-bottom: 15px;
      font-size: 14px;
      color: #888;
    }
    a {
      text-decoration: none;
    }
  `]
})
export class CourseCardComponent {
  @Input() course!: Course;
}
