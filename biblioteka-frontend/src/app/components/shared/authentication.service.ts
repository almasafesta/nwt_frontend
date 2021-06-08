import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';


@Injectable()
export class AuthService {
    
    private loggedIn = new BehaviorSubject<boolean>(false); // {1}
    //userType: BehaviorSubject<string> = new BehaviorSubject<string>(this.getUserType());

    get isLoggedIn() {
      return this.loggedIn.asObservable(); // {2}
    }
    
    /*getUserType(): string {
        const user=localStorage.getItem('user')
        return user!== null ? JSON.parse(user) : new User();
    }*/
    constructor(
      private router: Router
    ) {}
  
    login(user: User){
      if (user.username !== '' && user.password !== '' ) { // {3}
        
        if(user.username==='admin'){
            localStorage.setItem("admin", user.username);
        }
        else{
            localStorage.setItem("user", user.username);
        }
        this.loggedIn.next(true);
        //this.userType.next(user.username);
        this.router.navigate(['/']);
      }
    }
  
    logout() {                            // {4}
      this.loggedIn.next(false);
      this.router.navigate(['/login']);
    }


    /*
    currentUser: User | null;

    constructor(private toastr: ToastrService, private http:HttpClient, private router:Router) { }
    private baseUrlLogin: string="";
    private baseUrlRegister : string = "";


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
        this.toastr.info(`User: ${this.currentUser.username} logged in`);
    }

    logout(): void {
        this.currentUser = null;
    }*/
}