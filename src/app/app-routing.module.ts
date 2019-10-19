import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { UnAuthGaurdService } from './services/unauth-gaurd.service';

const routes: Routes = [
    { path: "", component: LoginComponent, canActivate : [UnAuthGaurdService]},
    { path: "home", component: HomeComponent, canActivate : [AuthGaurdService], data: {role: 'Admin'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
