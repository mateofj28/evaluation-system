import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Leaderboard } from '../models/leaderboard.model';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  private apiUrl = 'http://localhost:8080/api/leaderboard';

  constructor(private http: HttpClient) {}

  getLeaderboardByCourse(courseId: number): Observable<Leaderboard[]> {
    return this.http.get<Leaderboard[]>(`${this.apiUrl}/course/${courseId}`);
  }
}
