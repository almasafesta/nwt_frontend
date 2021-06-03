import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {EmployeeModel} from './employee.model'

@Injectable()
export class RestApiService {

  //constructor(private http: HttpClient) { }
 
  public getEmployees(): Observable<EmployeeModel> 
  {
    const url = 'http://localhost:8000/employees';
 
    return this.http.get<EmployeeModel>(url);
  }

  

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private toastr: ToastrService) {
  }

  public get(...request: any[]): Observable<any> {
    const [ path, options ] = request;

    let wrappedOptions = {...options, ...this.httpOptions};
    return this.http.get(path, wrappedOptions)
      .pipe(catchError( err => {
        this.toastr.error(err.error.message || err.message, 'Get error');
        return throwError(err);
      }));
  }

  public post(...request: any[]): Observable<any> {
    const [ path, body, options] = request;
    const wrappedBody = {
      entity: {
        ...body
      }
    }

    let wrappedOptions = {...options, ...this.httpOptions};

    return this.http.post(path,wrappedBody,wrappedOptions)
      .pipe(catchError( err => {
        this.toastr.error(err.error.message || err.message, 'Post error');
        return throwError(err);
      }));
  }

  public put(...request: any[]): Observable<any> {
    const [ path, body, options ] = request;
    const wrappedBody = {
      entity: {
        ...body
      }
    }

    let wrappedOptions = {...options, ...this.httpOptions};

    return this.http.put(path,wrappedBody,wrappedOptions)
      .pipe(catchError( err => {
        this.toastr.error(err.error.message || err.message, 'Put error');
        return throwError(err);
      }));
  }

  public delete(...request: any[]): Observable<any> {
    const [ path, options ] = request;

    let wrappedOptions = {...options, ...this.httpOptions};

    return this.http.delete(path,wrappedOptions)
      .pipe(catchError( err => {
        this.toastr.error(err.error.message || err.message, 'Delete error');
        return throwError(err);
      }));
  }

}