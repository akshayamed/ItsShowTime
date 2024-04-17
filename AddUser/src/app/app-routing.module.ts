import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/app-home', pathMatch: 'full' },
  { path: 'app-home', component: HomeComponent },
  { path: 'app-register', component: RegisterComponent },
  { path: 'app-login', component: LoginComponent },
  { path: 'app-admin-login', component: AdminLoginComponent },
  { path: 'app-admin-home', component: AdminHomeComponent } ,
  { path: 'app-user-login', component: UserLoginComponent },
  { path: 'app-user-home', component: UserHomeComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }