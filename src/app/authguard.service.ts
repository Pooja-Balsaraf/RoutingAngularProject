import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Authservice } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{
constructor(private authService: Authservice, private router: Router){

}

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> |boolean{
    return this.authService.isAuthenticated()
    .then((authenticated :boolean)=>{
     if(authenticated){
        return true;
     }
     else{
       this.router.navigate(['/']);
     }
    })
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
     return this.canActivate(route, state);
  }

}
