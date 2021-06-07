import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from './books';

@Injectable({
  providedIn: 'root'
})
export class BooksAdminService {
  private baseUrl='http://localhost:8555/edit-knjiga'
  private url='';
  constructor(private http:HttpClient) { }

  getAllBooks():Observable<any>{ 
    this.url=this.baseUrl;     
    
    return this.http.get<ArrayBuffer>(this.url, { 'headers': {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'Accept': '*'

    }} );
  }
  deleteBook(id:any){
    this.url=this.baseUrl+id;
    return this.http.delete(this.url);
  }
}
