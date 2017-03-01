import { Routes, RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './course-details.component';

const courseDetailsRoutes: Routes = [
	{ path: 'course-details', component: CourseDetailsComponent },
];

export const routes = RouterModule.forChild(courseDetailsRoutes);
