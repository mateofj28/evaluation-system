import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../../design-system/molecules/course-card/course-card.component';
import { CourseService } from '../../../core/services/course.service';
import { Course } from '../../../core/models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  template: `
    <div class="container">
      <div class="header">
        <h1>📚 Cursos Disponibles</h1>
        <p class="subtitle">Explora nuestros cursos y comienza tu aprendizaje</p>
      </div>
      
      <div *ngIf="courses.length === 0" class="loading">
        Cargando cursos...
      </div>
      
      <div class="course-grid" *ngIf="courses.length > 0">
        <app-course-card 
          *ngFor="let course of courses" 
          [course]="course">
        </app-course-card>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 40px 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .header {
      margin-bottom: 40px;
    }
    h1 {
      margin-bottom: 10px;
      color: #333;
      font-size: 32px;
    }
    .subtitle {
      color: #666;
      font-size: 16px;
    }
    .loading {
      text-align: center;
      padding: 40px;
      font-size: 18px;
      color: #666;
    }
    .course-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 24px;
    }
  `]
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getActiveCourses().subscribe(
      courses => this.courses = courses
    );
  }
}
