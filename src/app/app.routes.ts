import { Routes } from '@angular/router';
import { NoContentComponent } from './shared/no-content';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: '**', component: NoContentComponent },
];
