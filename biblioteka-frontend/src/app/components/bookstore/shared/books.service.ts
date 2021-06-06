import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Books } from './books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private baseUrl='http://localhost:8555/edit-knjiga'
  private url=''; 
  
  constructor(private http:HttpClient) { }

  getBooks():Observable<any>{ 
    this.url=this.baseUrl;  
      
    /*return from(fetch(this.url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json'
      },
      method: 'GET', // GET, POST, PUT, DELETE
      //mode: 'no-cors' // the most important option
    }))*/
    return this.http.get<ArrayBuffer>(this.url, { 'headers': {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'Accept': '*'

    }} );
  }
}
