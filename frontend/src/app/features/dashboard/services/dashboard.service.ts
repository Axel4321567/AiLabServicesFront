import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Metric } from '../models/metric.model';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMetrics(): Observable<Metric[]> {
    return this.http.get<Metric[]>(`${this.apiUrl}/metrics`);
  }
}
