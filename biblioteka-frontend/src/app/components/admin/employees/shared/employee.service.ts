import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl='http://localhost:8000/'
  private url='';
  constructor(private http:HttpClient) { }

  getAllEmployees():Observable<Employee[]>{ 
    return this.http.get<Employee[]>('${this.baseUrl}');
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
