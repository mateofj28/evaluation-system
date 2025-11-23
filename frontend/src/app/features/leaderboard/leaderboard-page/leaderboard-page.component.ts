import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardTableComponent } from '../../../design-system/organisms/leaderboard-table/leaderboard-table.component';
import { LeaderboardService } from '../../../core/services/leaderboard.service';
import { Leaderboard } from '../../../core/models/leaderboard.model';

@Component({
  selector: 'app-leaderboard-page',
  standalone: true,
  imports: [CommonModule, LeaderboardTableComponent],
  template: `
    <div class="container">
      <h1>🏆 Tabla de Clasificación</h1>
      <p class="subtitle">Los mejores estudiantes del curso "Introducción a Java"</p>
      
      <div *ngIf="leaderboard.length === 0" class="empty-state">
        <p>📊 Aún no hay estudiantes que hayan completado el curso.</p>
        <p>¡Sé el primero en aparecer en la clasificación!</p>
      </div>
      
      <app-leaderboard-table 
        *ngIf="leaderboard.length > 0" 
        [leaderboard]="leaderboard">
      </app-leaderboard-table>
    </div>
  `,
  styles: [`
    .container {
      padding: 40px 20px;
      max-width: 1000px;
      margin: 0 auto;
    }
    h1 {
      margin-bottom: 10px;
      color: #333;
      font-size: 32px;
    }
    .subtitle {
      color: #666;
      font-size: 16px;
      margin-bottom: 30px;
    }
    .empty-state {
      text-align: center;
      padding: 60px 20px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .empty-state p {
      font-size: 18px;
      color: #666;
      margin: 10px 0;
    }
  `]
})
export class LeaderboardPageComponent implements OnInit {
  leaderboard: Leaderboard[] = [];
  courseId = 1; // Por defecto

  constructor(private leaderboardService: LeaderboardService) {}

  ngOnInit() {
    this.leaderboardService.getLeaderboardByCourse(this.courseId).subscribe(
      data => this.leaderboard = data
    );
  }
}
