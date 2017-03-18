import { Routes } from '@angular/router';
import { EditCourseComponent } from './edit-course.component';

export const editCourseRoutes: Routes = [
	{ path: 'edit-course/:id', component: EditCourseComponent },
];
