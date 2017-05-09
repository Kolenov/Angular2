import { Routes } from '@angular/router';
import { EditCourseComponent } from './edit-course.component';
import { CanActivateAuthGuard } from '../../core/services';

export const editCourseRoutes: Routes = [
	{ path: 'edit-course/:id', component: EditCourseComponent, canActivate: [ CanActivateAuthGuard ] },
];
