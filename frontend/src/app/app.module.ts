import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from '../../../login/login.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'login', component: LoginComponent }, // Login route
  // Add other routes if needed
];

@NgModule({
  declarations: [
    LoginComponent,
     // Declare other components here
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), HomeComponent,  AppComponent,// Set up routing
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
