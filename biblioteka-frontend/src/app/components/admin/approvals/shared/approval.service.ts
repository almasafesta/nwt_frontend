import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Approval } from './approval';

@Injectable({
  providedIn: 'root'
})
export class ApprovalService {
  private baseUrl='http://localhost:8000/'
  private url='';
  constructor(private http:HttpClient) { }
  getAllApprovals():Observable<Approval[]>{ 
    return this.http.get<Approval[]>('${this.baseUrl}');
  }
  approveApproval(id:any){
    this.url=this.baseUrl+id;
    return this.http.get(this.url);
  }
  //nedovrseno
  denyApproval(id:any) {
    this.url=this.baseUrl+id;
  }
    
  }

