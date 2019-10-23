import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { UnAuthGaurdService } from './services/unauth-gaurd.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Page404Component } from './page404/page404.component';



const routes: Routes = [
    { path: "login", component: LoginComponent, canActivate : [UnAuthGaurdService]},
    { path: "", component: HomeComponent, canActivate : [UnAuthGaurdService]},
    { path: "dashboard", component: DashboardComponent, canActivate : [AuthGaurdService], data: {role: 'kmle',}},
	{ path: '**', component: Page404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
