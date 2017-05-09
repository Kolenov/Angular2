import { Routes } from '@angular/router';
import { AddCourseComponent } from './add-course.component';
import { CanActivateAuthGuard } from '../../core/services';

export const addCourseRoutes: Routes = [
	{ path: 'courses/new', component: AddCourseComponent, canActivate: [ CanActivateAuthGuard ]  }
];
