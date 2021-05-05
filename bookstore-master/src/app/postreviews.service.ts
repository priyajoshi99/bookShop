import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { review } from './userreview';

@Injectable({
  providedIn: 'root'
})
export class PostreviewsService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3000/review"
  postreview(userr:review){
    return this.http.post<any>(this.url,userr)
  }
}
