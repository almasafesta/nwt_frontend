import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { User } from '../../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl='http://localhost:8777/login'
  private url=''; 
  
  constructor(private http:HttpClient) { }

  getInfo(username:string):Observable<any>{ 
    this.url=this.baseUrl+'/u/'+username;     
    
    return this.http.get<ArrayBuffer>(this.url, { 'headers': {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'Accept': '*'}
        } );
  }
  register(user:User):Observable<any>{

      return this.http.post<any>(this.baseUrl, user);
  }
}