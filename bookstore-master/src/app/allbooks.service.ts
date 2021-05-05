import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { books } from './book';

@Injectable({
  providedIn: 'root'
})
export class AllbooksService {

  constructor(private http:HttpClient) { }

  getallbooks():Observable<books[]>{
    return this.http.get<books[]>("http://localhost:3000/books")

  }
}
