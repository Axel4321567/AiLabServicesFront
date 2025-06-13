import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';

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
    data: ChartConfiguration['data'];
    options: ChartConfiguration['options'];
    type: ChartType;
  }>;

  ngOnInit(): void {
    this.metrics = [
      { name: 'Ventas', value: 120, chartData: [ { name: 'Ene', value: 30 }, { name: 'Feb', value: 50 }, { name: 'Mar', value: 40 } ] },
      { name: 'Usuarios', value: 75, chartData: [ { name: 'Ene', value: 20 }, { name: 'Feb', value: 25 }, { name: 'Mar', value: 30 } ] },
      { name: 'Errores', value: 5, chartData: [ { name: 'Ene', value: 2 }, { name: 'Feb', value: 1 }, { name: 'Mar', value: 2 } ] },
      { name: 'Pedidos', value: 200, chartData: [ { name: 'Ene', value: 60 }, { name: 'Feb', value: 70 }, { name: 'Mar', value: 70 } ] }
    ];

    this.chartConfigs = this.metrics.map(m => ({
      data: {
        labels: m.chartData.map(c => c.name),
        datasets: [{ data: m.chartData.map(c => c.value), label: m.name }]
      },
      options: { responsive: true },
      type: 'bar'
    }));
  }
}
