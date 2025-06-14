import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Metric } from '../models/metric.model';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getMetrics(): Observable<Metric[]> {
    return this.http.get<Metric[]>(`${this.apiUrl}/metrics`);
  }
}
