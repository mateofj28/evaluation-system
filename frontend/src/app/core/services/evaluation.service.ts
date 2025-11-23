import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  private apiUrl = `${environment.apiUrl}/evaluations`;

  constructor(private http: HttpClient) {}

  submitAnswers(submission: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/submit`, submission);
  }

  completeCourse(enrollmentId: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/complete/${enrollmentId}`, {});
  }
}
