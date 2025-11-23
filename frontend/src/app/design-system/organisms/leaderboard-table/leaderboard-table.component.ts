import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../atoms/card/card.component';
import { Leaderboard } from '../../../core/models/leaderboard.model';

@Component({
  selector: 'app-leaderboard-table',
  standalone: true,
  imports: [CommonModule, CardComponent],
  template: `
    <app-card>
      <h2>Tabla de Clasificación</h2>
      <table>
        <thead>
          <tr>
            <th>Posición</th>
            <th>Usuario</th>
            <th>Nombre</th>
            <th>Puntuación</th>
            <th>Porcentaje</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let entry of leaderboard" [class.top-three]="entry.rank <= 3">
            <td class="rank">{{ entry.rank }}</td>
            <td>{{ entry.username }}</td>
            <td>{{ entry.firstName }} {{ entry.lastName }}</td>
            <td>{{ entry.score }} / {{ entry.maxScore }}</td>
            <td>{{ entry.percentage | number:'1.1-1' }}%</td>
          </tr>
        </tbody>
      </table>
    </app-card>
  `,
  styles: [`
    h2 {
      margin-bottom: 20px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    th {
      background-color: #f8f9fa;
      font-weight: 600;
    }
    .top-three {
      background-color: #fff3cd;
    }
    .rank {
      font-weight: bold;
      color: #007bff;
    }
  `]
})
export class LeaderboardTableComponent {
  @Input() leaderboard: Leaderboard[] = [];
}
