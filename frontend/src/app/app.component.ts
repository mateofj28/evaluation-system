import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService, LoginResponse } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <nav class="navbar" *ngIf="isLoggedIn()">
      <div class="container">
        <a routerLink="/dashboard" class="logo">
          <h1>📚 Sistema de Evaluación</h1>
        </a>
        <div class="nav-links">
          <a routerLink="/dashboard" routerLinkActive="active">
            🏠 Inicio
          </a>
          <a routerLink="/courses" routerLinkActive="active">
            📖 Cursos
          </a>
          <a routerLink="/leaderboard" routerLinkActive="active">
            🏆 Clasificación
          </a>
          <div class="user-menu">
            <span class="user-name">{{ currentUser?.firstName }}</span>
            <button class="logout-btn" (click)="logout()">Salir</button>
          </div>
        </div>
      </div>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .navbar {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 15px 0;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .navbar .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    .logo {
      text-decoration: none;
      color: white;
    }
    .navbar h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 600;
    }
    .nav-links {
      display: flex;
      gap: 15px;
    }
    .nav-links a {
      color: white;
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 8px;
      transition: all 0.3s;
      font-weight: 500;
    }
    .nav-links a:hover {
      background-color: rgba(255,255,255,0.15);
      transform: translateY(-2px);
    }
    .nav-links a.active {
      background-color: rgba(255,255,255,0.25);
    }
    .user-menu {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-left: 20px;
      padding-left: 20px;
      border-left: 2px solid rgba(255,255,255,0.3);
    }
    .user-name {
      color: white;
      font-weight: 500;
    }
    .logout-btn {
      background: rgba(255,255,255,0.2);
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 500;
      transition: background 0.3s;
    }
    .logout-btn:hover {
      background: rgba(255,255,255,0.3);
    }
    main {
      min-height: calc(100vh - 70px);
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'Sistema de Evaluación';
  currentUser: LoginResponse | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
