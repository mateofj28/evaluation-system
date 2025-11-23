import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CardComponent } from '../../../design-system/atoms/card/card.component';
import { ButtonComponent } from '../../../design-system/atoms/button/button.component';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-create-course',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent, ButtonComponent],
  template: `
    <div class="container">
      <button class="back-btn" (click)="goBack()">← Volver</button>
      
      <app-card>
        <h1>📝 Crear Nuevo Curso</h1>
        
        <form (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label>Nombre del Curso *</label>
            <input type="text" [(ngModel)]="course.name" name="name" required>
          </div>

          <div class="form-group">
            <label>Descripción *</label>
            <textarea [(ngModel)]="course.description" name="description" rows="3" required></textarea>
          </div>

          <div class="form-group">
            <label>Duración (minutos) *</label>
            <input type="number" [(ngModel)]="course.duration" name="duration" required>
          </div>

          <div class="form-group">
            <label>Badge (opcional)</label>
            <select [(ngModel)]="course.badgeId" name="badgeId">
              <option [value]="null">Sin badge</option>
              <option *ngFor="let badge of badges" [value]="badge.id">
                {{ badge.name }}
              </option>
            </select>
          </div>

          <h2>Módulos</h2>
          <div *ngFor="let module of course.modules; let i = index" class="module-section">
            <h3>Módulo {{ i + 1 }}</h3>
            
            <div class="form-group">
              <label>Nombre del Módulo *</label>
              <input type="text" [(ngModel)]="module.name" [name]="'moduleName' + i" required>
            </div>

            <div class="form-group">
              <label>Contenido *</label>
              <textarea [(ngModel)]="module.content" [name]="'moduleContent' + i" rows="2" required></textarea>
            </div>

            <div class="form-group">
              <label>Orden</label>
              <input type="number" [(ngModel)]="module.orderIndex" [name]="'moduleOrder' + i" required>
            </div>

            <h4>Preguntas</h4>
            <div *ngFor="let question of module.questions; let j = index" class="question-section">
              <div class="form-group">
                <label>Pregunta {{ j + 1 }} *</label>
                <input type="text" [(ngModel)]="question.questionText" [name]="'question' + i + j" required>
              </div>

              <div class="options-grid">
                <div class="form-group">
                  <label>Opción A *</label>
                  <input type="text" [(ngModel)]="question.optionA" [name]="'optionA' + i + j" required>
                </div>
                <div class="form-group">
                  <label>Opción B *</label>
                  <input type="text" [(ngModel)]="question.optionB" [name]="'optionB' + i + j" required>
                </div>
                <div class="form-group">
                  <label>Opción C *</label>
                  <input type="text" [(ngModel)]="question.optionC" [name]="'optionC' + i + j" required>
                </div>
                <div class="form-group">
                  <label>Opción D *</label>
                  <input type="text" [(ngModel)]="question.optionD" [name]="'optionD' + i + j" required>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label>Respuesta Correcta *</label>
                  <select [(ngModel)]="question.correctAnswer" [name]="'correct' + i + j" required>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Puntos *</label>
                  <input type="number" [(ngModel)]="question.points" [name]="'points' + i + j" required>
                </div>
              </div>

              <button type="button" class="remove-btn" (click)="removeQuestion(i, j)">
                Eliminar Pregunta
              </button>
            </div>

            <button type="button" class="add-btn" (click)="addQuestion(i)">
              + Agregar Pregunta
            </button>

            <button type="button" class="remove-btn" (click)="removeModule(i)" *ngIf="course.modules.length > 1">
              Eliminar Módulo
            </button>
          </div>

          <button type="button" class="add-btn" (click)="addModule()">
            + Agregar Módulo
          </button>

          <div *ngIf="message" [class]="'message ' + messageType">
            {{ message }}
          </div>

          <div class="form-actions">
            <app-button type="submit" variant="success" [disabled]="loading">
              {{ loading ? 'Creando...' : 'Crear Curso' }}
            </app-button>
          </div>
        </form>
      </app-card>
    </div>
  `,
  styles: [`
    .container {
      padding: 40px 20px;
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
    h1 {
      margin-bottom: 30px;
      color: #333;
    }
    h2 {
      margin: 30px 0 20px 0;
      color: #555;
    }
    h3 {
      color: #667eea;
      margin-bottom: 15px;
    }
    h4 {
      margin: 20px 0 15px 0;
      color: #666;
    }
    .form-group {
      margin-bottom: 20px;
    }
    .form-group label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      color: #333;
    }
    .form-group input,
    .form-group textarea,
    .form-group select {
      width: 100%;
      padding: 10px;
      border: 2px solid #e0e0e0;
      border-radius: 6px;
      font-size: 14px;
    }
    .form-group input:focus,
    .form-group textarea:focus,
    .form-group select:focus {
      outline: none;
      border-color: #667eea;
    }
    .module-section {
      background: #f8f9fa;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 20px;
    }
    .question-section {
      background: white;
      padding: 15px;
      border-radius: 6px;
      margin-bottom: 15px;
      border: 2px solid #e0e0e0;
    }
    .options-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }
    .form-row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }
    .add-btn {
      background: #28a745;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 500;
      margin-top: 10px;
      margin-right: 10px;
    }
    .add-btn:hover {
      background: #218838;
    }
    .remove-btn {
      background: #dc3545;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 13px;
      margin-top: 10px;
    }
    .remove-btn:hover {
      background: #c82333;
    }
    .form-actions {
      margin-top: 30px;
      display: flex;
      gap: 15px;
    }
    .message {
      padding: 15px;
      border-radius: 6px;
      margin: 20px 0;
    }
    .message.success {
      background: #d4edda;
      color: #155724;
    }
    .message.error {
      background: #f8d7da;
      color: #721c24;
    }
  `]
})
export class CreateCourseComponent {
  course = {
    name: '',
    description: '',
    duration: 60,
    badgeId: null as number | null,
    modules: [
      {
        name: '',
        content: '',
        orderIndex: 1,
        questions: [
          {
            questionText: '',
            optionA: '',
            optionB: '',
            optionC: '',
            optionD: '',
            correctAnswer: 'A',
            points: 10
          }
        ]
      }
    ]
  };

  badges: any[] = [];
  loading = false;
  message = '';
  messageType: 'success' | 'error' = 'success';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.loadBadges();
  }

  loadBadges() {
    this.http.get<any[]>(`${environment.apiUrl}/badges`).subscribe(
      badges => this.badges = badges
    );
  }

  addModule() {
    this.course.modules.push({
      name: '',
      content: '',
      orderIndex: this.course.modules.length + 1,
      questions: [
        {
          questionText: '',
          optionA: '',
          optionB: '',
          optionC: '',
          optionD: '',
          correctAnswer: 'A',
          points: 10
        }
      ]
    });
  }

  removeModule(index: number) {
    this.course.modules.splice(index, 1);
  }

  addQuestion(moduleIndex: number) {
    this.course.modules[moduleIndex].questions.push({
      questionText: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      correctAnswer: 'A',
      points: 10
    });
  }

  removeQuestion(moduleIndex: number, questionIndex: number) {
    this.course.modules[moduleIndex].questions.splice(questionIndex, 1);
  }

  onSubmit() {
    this.loading = true;
    this.message = '';

    this.http.post(`${environment.apiUrl}/courses/with-modules`, this.course).subscribe({
      next: (response) => {
        this.loading = false;
        this.message = '¡Curso creado exitosamente!';
        this.messageType = 'success';
        setTimeout(() => {
          this.router.navigate(['/courses']);
        }, 2000);
      },
      error: (error) => {
        this.loading = false;
        this.message = 'Error al crear el curso. Verifica los datos.';
        this.messageType = 'error';
      }
    });
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
