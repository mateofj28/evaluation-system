import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService, LoginResponse } from '../../core/services/auth.service';
import { CardComponent } from '../../design-system/atoms/card/card.component';
import { ButtonComponent } from '../../design-system/atoms/button/button.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, CardComponent, ButtonComponent],
  template: `
    <div class="container">
      <div class="welcome-section">
        <h1>👋 Bienvenido, {{ currentUser?.firstName }}!</h1>
        <p class="role-badge" [class]="'role-' + currentUser?.role">
          {{ getRoleName() }}
        </p>
      </div>

      <div class="dashboard-grid">
        <!-- Admin Dashboard -->
        <app-card *ngIf="isAdmin()">
          <h2>🔧 Panel de Administrador</h2>
          <p>Tienes acceso completo al sistema</p>
          <div class="actions">
            <a routerLink="/courses">
              <app-button variant="primary">Ver Cursos</app-button>
            </a>
            <a routerLink="/admin/create-course">
              <app-button variant="success">Crear Curso</app-button>
            </a>
            <a routerLink="/users">
              <app-button variant="secondary">Gestionar Usuarios</app-button>
            </a>
            <a routerLink="/leaderboard">
              <app-button variant="primary">Ver Clasificación</app-button>
            </a>
          </div>
        </app-card>

        <!-- Evaluador Dashboard -->
        <app-card *ngIf="isEvaluador()">
          <h2>📝 Panel de Evaluador</h2>
          <p>Puedes crear y gestionar cursos</p>
          <div class="actions">
            <a routerLink="/courses">
              <app-button variant="primary">Ver Cursos</app-button>
            </a>
            <a routerLink="/evaluador/create-course">
              <app-button variant="success">Crear Curso</app-button>
            </a>
            <a routerLink="/leaderboard">
              <app-button variant="primary">Ver Clasificación</app-button>
            </a>
          </div>
        </app-card>

        <!-- Evaluado Dashboard -->
        <app-card *ngIf="isEvaluado()">
          <h2>📚 Panel de Estudiante</h2>
          <p>Explora cursos y mejora tus habilidades</p>
          <div class="actions">
            <a routerLink="/courses">
              <app-button variant="primary">Ver Cursos Disponibles</app-button>
            </a>
            <a routerLink="/my-enrollments">
              <app-button variant="secondary">Mis Inscripciones</app-button>
            </a>
            <a routerLink="/leaderboard">
              <app-button variant="primary">Ver Clasificación</app-button>
            </a>
          </div>
        </app-card>

        <!-- Stats Cards -->
        <app-card class="stat-card">
          <div class="stat-content">
            <div class="stat-icon">📊</div>
            <div class="stat-info">
              <h3>Estadísticas</h3>
              <p>Próximamente</p>
            </div>
          </div>
        </app-card>

        <app-card class="stat-card">
          <div class="stat-content">
            <div class="stat-icon">🏆</div>
            <div class="stat-info">
              <h3>Mis Badges</h3>
              <p>Próximamente</p>
            </div>
          </div>
        </app-card>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 40px 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .welcome-section {
      margin-bottom: 40px;
      text-align: center;
    }
    .welcome-section h1 {
      font-size: 36px;
      margin-bottom: 15px;
      color: #333;
    }
    .role-badge {
      display: inline-block;
      padding: 8px 20px;
      border-radius: 20px;
      font-weight: 600;
      font-size: 14px;
    }
    .role-ADMINISTRADOR {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    .role-EVALUADOR {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      color: white;
    }
    .role-EVALUADO {
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      color: white;
    }
    .dashboard-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
    }
    h2 {
      margin-bottom: 10px;
      color: #333;
    }
    p {
      color: #666;
      margin-bottom: 20px;
    }
    .actions {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .actions a {
      text-decoration: none;
    }
    .stat-card {
      background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
    }
    .stat-content {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    .stat-icon {
      font-size: 48px;
    }
    .stat-info h3 {
      margin: 0 0 5px 0;
      color: #333;
    }
    .stat-info p {
      margin: 0;
      color: #666;
    }
  `]
})
export class DashboardComponent implements OnInit {
  currentUser: LoginResponse | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    if (!this.currentUser) {
      this.router.navigate(['/login']);
    }
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  isEvaluador(): boolean {
    return this.authService.isEvaluador();
  }

  isEvaluado(): boolean {
    return this.authService.isEvaluado();
  }

  getRoleName(): string {
    switch (this.currentUser?.role) {
      case 'ADMINISTRADOR': return 'Administrador';
      case 'EVALUADOR': return 'Evaluador';
      case 'EVALUADO': return 'Estudiante';
      default: return '';
    }
  }
}
