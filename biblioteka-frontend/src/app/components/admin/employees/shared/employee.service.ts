import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl='http://localhost:8686/zaposlenici'
  private url='';
  constructor(private http:HttpClient) { }
  
  getAllEmployees():Observable<any>{ 
    return this.http.get<ArrayBuffer>(this.baseUrl, { 'headers': {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'Accept': '*'}});
  }
  deleteEmployee(id:any){
    this.url=this.baseUrl+id;
    return this.http.delete(this.url);
  }
  addEmployee(){

  }
  editEmployee(){
    
  }
}
