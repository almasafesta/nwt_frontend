import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from './books';

@Injectable({
  providedIn: 'root'
})
export class BooksAdminService {
  private baseUrl='http://localhost:8000/'
  private url='';
  constructor(private http:HttpClient) { }

  getAllBooks():Observable<Books[]>{ 
    return this.http.get<Books[]>('${this.baseUrl}');
  }
  deleteBook(id:any){
    this.url=this.baseUrl+id;
    return this.http.delete(this.url);
  }
}
