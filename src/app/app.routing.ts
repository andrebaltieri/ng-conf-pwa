import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ListCoursesComponent } from './components/courses/list-courses/list-courses.component';
import { CourseDetailsComponent } from './components/courses/course-details/course-details.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'courses', component: ListCoursesComponent },
    { path: 'courses/details/:tag', component: CourseDetailsComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
