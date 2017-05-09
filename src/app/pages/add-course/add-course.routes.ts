import { Routes } from '@angular/router';
import { AddCourseComponent } from './add-course.component';
import { CanActivateAuthGuardService } from '../../core/services';

export const addCourseRoutes: Routes = [
	{ path: 'courses/new', component: AddCourseComponent, canActivate: [ CanActivateAuthGuardService ]  }
];
