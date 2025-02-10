import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn:'root'
})

export class ManagerGuard implements CanActivate{
  constructor(private authService:AuthService,private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const value = localStorage.getItem('isLogged');
    console.log(value);
    
    if(value!=='true'){
      this.router.navigate(['/'])
      console.log("Not logged in");
      
      return false;
    }

    const role = localStorage.getItem('role');

    if(role !== 'customer'){
      return true;
    }

    this.router.navigate(['/'])

    return false;

  }
}