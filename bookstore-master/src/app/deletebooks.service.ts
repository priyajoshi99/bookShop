import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeletebooksService {

  constructor(private http:HttpClient) { }
  deletebooks(obj:any){
    return this.http.delete<any>(`http://localhost:3000/products/${obj}`)
  }
}
