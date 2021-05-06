import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisteruserService {

  constructor(private http:HttpClient,private route:Router) { }

  url="http://localhost:3000/user/register"
  url_login="http://localhost:3000/user/login"

  reigsteruser(user:any){
    return this.http.post<any>(this.url,user)
  }

  loginuser(user:any){
    return this.http.post<any>(this.url_login,user)
  }

  loggedin(){
    return !!localStorage.getItem('token')
  }

  gettoken(){
    return localStorage.getItem('token')
  }

  getuserid(){
    
   return localStorage.getItem('id')
    
    
  }
  
  logoutuser(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    
    this.route.navigate([''])
  }
}
