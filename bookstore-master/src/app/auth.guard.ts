import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RegisteruserService } from './registeruser.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private rs:RegisteruserService,private route:Router){}

  canActivate():boolean{
     if(this.rs.loggedin()){
       return true
     }
     else{
       this.route.navigate(['/login'])
       return false
     }
  }
  
}
