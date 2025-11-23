import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../../core/services/course.service';
import { EnrollmentService } from '../../../core/services/enrollment.service';
import { EvaluationService } from '../../../core/services/evaluation.service';
import { Course } from '../../../core/models/course.model';
import { CardComponent } from '../../../design-system/atoms/card/card.component';
import { ButtonComponent } from '../../../design-system/atoms/button/button.component';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent, ButtonComponent],
  template: `
    <div class="container">
      <button class="back-btn" (click)="goBack()">← Volver</button>
      
      <app-card *ngIf="course">
        <h1>{{ course.name }}</h1>
        <p class="description">{{ course.description }}</p>
        
        <div class="course-info">
          <span>⏱️ Duración: {{ course.duration }} minutos</span>
          <span *ngIf="course.badge">🏆 Badge: {{ course.badge.name }}</span>
        </div>

        <div class="actions">
          <app-button variant="primary" (click)="enrollInCourse()">
            Inscribirse en el Curso
          </app-button>
        </div>
      </app-card>

      <div *ngIf="course && course.modules.length > 0">
        <h2>Módulos del Curso</h2>
        <app-card *ngFor="let module of course.modules">
          <h3>{{ module.orderIndex }}. {{ module.name }}</h3>
          <p>{{ module.content }}</p>
          
          <div *ngIf="module.questions.length > 0" class="questions-section">
            <h4>Evaluación ({{ module.questions.length }} preguntas)</h4>
            
            <div *ngFor="let question of module.questions; let i = index" class="question">
              <p class="question-text">{{ i + 1 }}. {{ question.questionText }}</p>
              <div class="options">
                <label>
                  <input type="radio" 
                         [name]="'q' + question.id" 
                         [value]="'A'"
                         [(ngModel)]="answers[question.id]">
                  A) {{ question.optionA }}
                </label>
                <label>
                  <input type="radio" 
                         [name]="'q' + question.id" 
                         [value]="'B'"
                         [(ngModel)]="answers[question.id]">
                  B) {{ question.optionB }}
                </label>
                <label>
                  <input type="radio" 
                         [name]="'q' + question.id" 
                         [value]="'C'"
                         [(ngModel)]="answers[question.id]">
                  C) {{ question.optionC }}
                </label>
                <label>
                  <input type="radio" 
                         [name]="'q' + question.id" 
                         [value]="'D'"
                         [(ngModel)]="answers[question.id]">
                  D) {{ question.optionD }}
                </label>
              </div>
            </div>

            <app-button variant="success" (click)="submitAnswers(module.id)">
              Enviar Respuestas
            </app-button>
          </div>
        </app-card>
      </div>

      <app-card *ngIf="result" class="result-card">
        <h2>{{ result.passed ? '✅ ¡Aprobado!' : '❌ No Aprobado' }}</h2>
        <div class="result-details">
          <p>Respuestas correctas: {{ result.correctAnswers }} / {{ result.totalQuestions }}</p>
          <p>Puntos obtenidos: {{ result.pointsEarned }} / {{ result.maxPoints }}</p>
          <p>Porcentaje: {{ result.percentage | number:'1.1-1' }}%</p>
          <p *ngIf="result.badgeEarned" class="badge-earned">
            🏆 ¡Has ganado el badge: {{ result.badgeEarned.name }}!
          </p>
        </div>
      </app-card>

      <div *ngIf="message" class="message" [class.success]="messageType === 'success'">
        {{ message }}
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
      max-width: 900px;
      margin: 0 auto;
    }
    .back-btn {
      background: none;
      border: none;
      color: #007bff;
      cursor: pointer;
      font-size: 16px;
      margin-bottom: 20px;
      padding: 5px 10px;
    }
    .back-btn:hover {
      text-decoration: underline;
    }
    h1 {
      margin-bottom: 15px;
      color: #333;
    }
    .description {
      font-size: 16px;
      color: #666;
      margin-bottom: 20px;
    }
    .course-info {
      display: flex;
      gap: 20px;
      margin-bottom: 20px;
      font-size: 14px;
    }
    .actions {
      margin-top: 20px;
    }
    h2 {
      margin: 30px 0 20px 0;
    }
    h3 {
      color: #007bff;
      margin-bottom: 10px;
    }
    h4 {
      margin: 20px 0 15px 0;
      color: #555;
    }
    .questions-section {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 2px solid #e0e0e0;
    }
    .question {
      margin-bottom: 25px;
      padding: 15px;
      background: #f8f9fa;
      border-radius: 8px;
    }
    .question-text {
      font-weight: 600;
      margin-bottom: 12px;
      color: #333;
    }
    .options {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .options label {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      padding: 8px;
      border-radius: 4px;
      transition: background-color 0.2s;
    }
    .options label:hover {
      background-color: #e9ecef;
    }
    .options input[type="radio"] {
      cursor: pointer;
    }
    .result-card {
      margin-top: 30px;
      background: #f0f8ff;
    }
    .result-details {
      margin-top: 15px;
    }
    .result-details p {
      margin: 8px 0;
      font-size: 16px;
    }
    .badge-earned {
      color: #28a745;
      font-weight: bold;
      font-size: 18px;
      margin-top: 15px;
    }
    .message {
      margin-top: 20px;
      padding: 15px;
      border-radius: 4px;
      background-color: #d1ecf1;
      color: #0c5460;
    }
    .message.success {
      background-color: #d4edda;
      color: #155724;
    }
  `]
})
export class CourseDetailComponent implements OnInit {
  course: Course | null = null;
  answers: { [key: number]: string } = {};
  result: any = null;
  enrollmentId: number | null = null;
  message: string = '';
  messageType: 'success' | 'error' = 'success';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    private enrollmentService: EnrollmentService,
    private evaluationService: EvaluationService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.courseService.getCourseById(+id).subscribe(
        course => this.course = course
      );
    }
  }

  enrollInCourse() {
    if (!this.course) return;
    
    // Obtener usuario actual
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const userId = currentUser.userId;
    
    this.enrollmentService.enrollUser(userId, this.course.id).subscribe({
      next: (enrollment) => {
        this.enrollmentId = enrollment.id;
        this.message = '¡Te has inscrito exitosamente en el curso!';
        this.messageType = 'success';
      },
      error: (error) => {
        this.message = 'Ya estás inscrito en este curso o hubo un error.';
        this.messageType = 'error';
      }
    });
  }

  submitAnswers(moduleId: number) {
    if (!this.enrollmentId) {
      this.message = 'Primero debes inscribirte en el curso.';
      this.messageType = 'error';
      return;
    }

    const submission = {
      enrollmentId: this.enrollmentId,
      moduleId: moduleId,
      answers: this.answers
    };

    this.evaluationService.submitAnswers(submission).subscribe({
      next: (result) => {
        this.result = result;
        this.message = '';
      },
      error: (error) => {
        this.message = 'Error al enviar las respuestas.';
        this.messageType = 'error';
      }
    });
  }

  goBack() {
    this.router.navigate(['/courses']);
  }
}
