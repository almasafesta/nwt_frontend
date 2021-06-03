import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from './books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private baseUrl='http://localhost:8000/'
  private url='';
  constructor(private http:HttpClient) { }

  getBooks():Observable<Books[]>{ 
    this.url=this.baseUrl;
    //dodati parametre
    return this.http.get<Books[]>('${this.url}');
  }
}
