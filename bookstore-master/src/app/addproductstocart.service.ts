import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddproductstocartService {

  constructor(private http:HttpClient) { }

  addproducts(obj:any){
    return this.http.post<any>("http://localhost:3000/user/cart",obj)
  }
}
