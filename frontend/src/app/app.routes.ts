import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { CourseListComponent } from './features/courses/course-list/course-list.component';
import { CourseDetailComponent } from './features/courses/course-detail/course-detail.component';
import { LeaderboardPageComponent } from './features/leaderboard/leaderboard-page/leaderboard-page.component';

import { CreateCourseComponent } from './features/courses/create-course/create-course.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/:id', component: CourseDetailComponent },
  { path: 'leaderboard', component: LeaderboardPageComponent },
  { path: 'admin/create-course', component: CreateCourseComponent },
  { path: 'evaluador/create-course', component: CreateCourseComponent }
];
