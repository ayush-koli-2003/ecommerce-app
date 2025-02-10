import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { Role } from "./role.enum";

@Injectable({
  providedIn:'root'
})

export class CustomerGuard implements CanActivate{
  constructor(private authService:AuthService,private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const value = localStorage.getItem('isLogged');
    console.log(value);
    
    if(value!=='true'){
      this.router.navigate(['/user'])
      console.log("Not logged in");
      return false;
    }

    const role = localStorage.getItem('role');

    if(role !== 'manager'){
      return true;
    }

    this.router.navigate(['/'])

    return false;
  }
}