import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Balance } from './balance';
import { Books } from './books';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseUrl='http://localhost:8555/edit-knjiga'
  private url='';
  constructor(private http:HttpClient) { }
  //getUser(id:any):Observable<Profile>{ 
    //this.url=this.baseUrl+id;
    //return this.http.get<Profile>('${this.url}');
  //}
  getBooks():Observable<any>{ 
    this.url=this.baseUrl;     
    
    return this.http.get<ArrayBuffer>(this.baseUrl, { 'headers': {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'Accept': '*'

    }} );
  }
  editProfile(profile:Profile, id:any){
    this.url=this.baseUrl;
    //put
    //return this.http.put<Profile>('$this.url');
  }
  sumbitReview(){
    //post
    
  }
  cancelMembership(id:any){
    this.url=this.baseUrl+id;
    return this.http.delete('$this.url');
  }
  renewMembership(){
    //post
  }
  checkBalance(id:any):Observable<Balance>{
    this.url=this.baseUrl+id;
    return this.http.get<Balance>('$this.url');    
  }
}
