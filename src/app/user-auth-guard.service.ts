import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuardService {

  canActivate(_active: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean {

    if (localStorage.getItem('email_id') != null) {
      return true;
    }
    alert('login first');
    this._router.navigate(['']);
    return false;
  }

  constructor(private _router:Router) { }
}
