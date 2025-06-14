import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';
import { DashboardService } from '../../services/dashboard.service'; 


import { Metric } from '../../models/metric.model';

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    NgChartsModule
  ],
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {
  metrics: Metric[] = [];
  chartConfigs!: Array<{
    data: any;
    options: any;
    type: ChartType;
  }>;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getMetrics().subscribe(data => {
      this.metrics = data;
      this.chartConfigs = this.metrics.map(m => ({
        data: {
          labels: m.chartData.map(c => c.name),
          datasets: [{ data: m.chartData.map(c => c.value), label: m.name }]
        },
        options: { responsive: true },
        type: 'bar'
      }));
    });
  }
}