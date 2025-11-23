import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Leaderboard } from '../models/leaderboard.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  private apiUrl = `${environment.apiUrl}/leaderboard`;

  constructor(private http: HttpClient) {}

  getLeaderboardByCourse(courseId: number): Observable<Leaderboard[]> {
    return this.http.get<Leaderboard[]>(`${this.apiUrl}/course/${courseId}`);
  }
}
