import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { books } from './book';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private api = "http://localhost:3000/books";

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<books[]> {
    return this.httpClient.get<books[]>(this.api);
  }

  filterData(_discount: number): Observable<books[]>
  {
    return this.getData().pipe(
      map((data : books[])=>data.filter(p=>p.discount > 45))
    )
  }

  notifiedData(_discount : number): Observable<books[]>
  {
    return this.getData().pipe(
      map((data: books[]) => data.filter(p => p.discount>37))
    )
  }

}
