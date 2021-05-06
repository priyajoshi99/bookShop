import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http'
import { RegisteruserService } from './registeruser.service';

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor {

  constructor(private rs:RegisteruserService) { }

  intercept(req:any,next:any){
    let tokenizedreq=req.clone({
      setHeaders:{
        Authorizarion:`Bearer ${this.rs.gettoken()}`
      }
    })
    return next.handle(tokenizedreq)
  }
}
