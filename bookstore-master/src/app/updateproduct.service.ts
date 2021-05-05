import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateproductService {

  constructor(private http:HttpClient){ }
  updatebok(obj:any){
    return this.http.put<any>("http://localhost:3000/products/update",obj)
 }
}
