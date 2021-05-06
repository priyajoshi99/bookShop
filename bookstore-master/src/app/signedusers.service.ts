import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SignedusersService {

  constructor(private http:HttpClient) { }
 

  getuserInfo(id:any){
    return this.http.get<any>(`http://localhost:3000/user/${id}`)
  }
}
