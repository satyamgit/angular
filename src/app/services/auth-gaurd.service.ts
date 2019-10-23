import { Injectable } from '@angular/core';
import { MyCookieService } from './my-cookie.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {
  user:any;
  constructor(
    private myCookieService : MyCookieService,
    private router : Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 
    if(this.myCookieService.checkCookie('user')){
        return true;
    } else{
      this.router.navigate(['/']); 
    }     
  }
}
