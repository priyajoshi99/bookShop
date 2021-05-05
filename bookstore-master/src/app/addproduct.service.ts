import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddproductService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3000/products/add"

  addNewBook(book:any){
   return this.http.post<any>(this.url,book);
  }
}
