import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { books } from './book';


@Injectable({
  providedIn: 'root'
})
export class CategoriesbooksService {

  constructor(private http:HttpClient) { }

  getbooksbycategories(name:any):Observable<books[]>{
    return this.http.get<books[]>(`http://localhost:3000/categories/${name}`)
  }
}
