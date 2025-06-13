import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/components/main-dashboard/main-dashboard.component')
        .then(m => m.MainDashboardComponent)
  },
  { path: '**', redirectTo: 'dashboard' }
];
