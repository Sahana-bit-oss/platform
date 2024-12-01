/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  //Default route redirects to the login page
  { path: 'login', redirectTo: 'auth/login', pathMatch: 'full' },

  { path: 'register', redirectTo: 'auth/register', pathMatch: 'full' },

  //Lazy-loaded route for Auth Module
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },

  //Lazy-loaded route for Courses Module
  { path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) },

  //Lazy-loaded route for Admin Module
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },

  //Wildcard fallback route (redirect to login if no route matches)
  { path: '**', redirectTo: 'auth/login' },
];
*/

  /*
export class AppRoutingModule {}
*/

import { provideRouter, RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { NgModule } from "@angular/core";


export const routes: Routes =
        [
          {path:'auth/login',component:LoginComponent}
        ];
export const appRoutingProviders=[provideRouter(routes)];

