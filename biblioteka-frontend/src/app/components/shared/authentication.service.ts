import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';


@Injectable()
export class AuthService {
    currentUser: User;

    constructor(private toastr: ToastrService, private http:HttpClient, private router:Router) { }
    private baseUrlLogin: string="";
    private baseUrlRegister : string = "";

    private loginStatus = new BehaviorSubject<boolean>(this.isLoggedIn());
    private UserName    = new BehaviorSubject<string>(localStorage.getItem('username')|| '{}');
    private UserRole    = new BehaviorSubject<string>(localStorage.getItem('userRole')|| '{}');

    isLoggedIn(): boolean {
        return !!this.currentUser;
    }
    
    register(username: string, password: string, email : string ) 
    {
        return this.http.post<any>(this.baseUrlRegister, {username, password, email}).pipe(map(result => {
            //registration was successful
            return result;
        
        }));
    }
    login(userName: string, password: string){
        if (userName === 'admin') {
            console.log("ovo je admin", userName)
            this.currentUser = {
                id: 1,
                username: userName,
                role: 'admin'
            };           
            
        }
        else if(userName==='employee'){
            console.log("ovo je employee", userName)
            this.currentUser = {
                id: 2,
                username: userName,
                role: 'employee'
            };
        }
        else{
            console.log("ovo je ostali", userName)
            this.currentUser = {
                id: 3,
                username: userName,
                role: 'user'
            };

        }
        this.toastr.info(`User: ${this.currentUser.username} logged in`);/*

        return this.http.post<any>(this.baseUrlLogin, {userName, password}).pipe(


            map(result => {

                // login successful if there's a jwt token in the response
                if(result && result.token) 
                {
                      // store user details and jwt token in local storage to keep user logged in between page refreshes

                    this.loginStatus.next(true);
                    localStorage.setItem('loginStatus', '1');
                    localStorage.setItem('jwt', result.token);
                    localStorage.setItem('username', result.username);
                    localStorage.setItem('expiration', result.expiration);
                    localStorage.setItem('userRole', result.userRole);
                    this.UserName.next(localStorage.getItem('userName')|| '{}');
                    this.UserRole.next(localStorage.getItem('userRole')|| '{}');


                }

                 return result;

            })
              
            );*/


    }

    logout(): void {
         // Set Loginstatus to false and delete saved jwt cookie
         this.loginStatus.next(false);
         localStorage.removeItem('jwt');
         localStorage.removeItem('userRole');
         localStorage.removeItem('username');
         localStorage.removeItem('expiration');
         localStorage.setItem('loginStatus', '0');
         this.router.navigate(['/login']);
         console.log("Logged Out Successfully");
    }
    get isLoggesIn() 
    {
        return this.loginStatus.asObservable();
    }

    get currentUserName() 
    {
        return this.UserName.asObservable();
    }

   get currentUserRole() 
    {
        return this.UserRole.asObservable();
    }
}