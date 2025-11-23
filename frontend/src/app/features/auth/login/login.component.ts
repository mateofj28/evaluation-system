import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { CardComponent } from '../../../design-system/atoms/card/card.component';
import { ButtonComponent } from '../../../design-system/atoms/button/button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent, ButtonComponent],
  template: `
    <div class="login-container">
      <div class="login-box">
        <app-card>
          <div class="login-header">
            <h1>🔐 Iniciar Sesión</h1>
            <p>Sistema de Evaluación</p>
          </div>

          <form (ngSubmit)="onSubmit()">
            <div class="form-group">
              <label for="username">Usuario</label>
              <input 
                type="text" 
                id="username" 
                [(ngModel)]="credentials.username" 
                name="username"
                placeholder="Ingresa tu usuario"
                required>
            </div>

            <div class="form-group">
              <label for="password">Contraseña</label>
              <input 
                type="password" 
                id="password" 
                [(ngModel)]="credentials.password" 
                name="password"
                placeholder="Ingresa tu contraseña"
                required>
            </div>

            <div *ngIf="errorMessage" class="error-message">
              {{ errorMessage }}
            </div>

            <app-button 
              type="submit" 
              variant="primary" 
              [disabled]="loading"
              style="width: 100%;">
              {{ loading ? 'Iniciando sesión...' : 'Iniciar Sesión' }}
            </app-button>
          </form>

          <div class="demo-users">
            <h3>👥 Usuarios de Prueba</h3>
            <div class="user-list">
              <div class="user-item" (click)="fillCredentials('admin', 'admin123')">
                <strong>Admin:</strong> admin / admin123
              </div>
              <div class="user-item" (click)="fillCredentials('evaluador', 'eval123')">
                <strong>Evaluador:</strong> evaluador / eval123
              </div>
              <div class="user-item" (click)="fillCredentials('estudiante', 'est123')">
                <strong>Estudiante:</strong> estudiante / est123
              </div>
            </div>
          </div>
        </app-card>
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      min-height: calc(100vh - 70px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .login-box {
      width: 100%;
      max-width: 450px;
    }
    .login-header {
      text-align: center;
      margin-bottom: 30px;
    }
    .login-header h1 {
      margin-bottom: 10px;
      color: #333;
    }
    .login-header p {
      color: #666;
      font-size: 16px;
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
    .form-group input {
      width: 100%;
      padding: 12px;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      font-size: 14px;
      transition: border-color 0.3s;
    }
    .form-group input:focus {
      outline: none;
      border-color: #667eea;
    }
    .error-message {
      background-color: #fee;
      color: #c33;
      padding: 12px;
      border-radius: 8px;
      margin-bottom: 20px;
      text-align: center;
    }
    .demo-users {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 2px solid #e0e0e0;
    }
    .demo-users h3 {
      font-size: 14px;
      color: #666;
      margin-bottom: 12px;
      text-align: center;
    }
    .user-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .user-item {
      padding: 10px;
      background: #f8f9fa;
      border-radius: 6px;
      font-size: 13px;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    .user-item:hover {
      background: #e9ecef;
    }
    .user-item strong {
      color: #667eea;
    }
  `]
})
export class LoginComponent {
  credentials = {
    username: '',
    password: ''
  };
  errorMessage = '';
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  fillCredentials(username: string, password: string) {
    this.credentials.username = username;
    this.credentials.password = password;
  }

  onSubmit() {
    this.loading = true;
    this.errorMessage = '';

    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        this.loading = false;
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.loading = false;
        this.errorMessage = 'Usuario o contraseña incorrectos';
      }
    });
  }
}
