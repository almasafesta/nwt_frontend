import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/authentication.service';
import { User } from '../shared/user.model';
import { FormsModule } from '@angular/forms';
import { LoginService } from './shared/login.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  currentUser:User;
  userLogin:User;
  username:string;
  password:string;

  constructor(private router: Router, private toastr: ToastrService, private authService: AuthService, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(){        
    this.loginService.getInfo(this.username).subscribe((data: any)=>{
      if(data.password===this.password){
        this.currentUser=data;
        this.authService.login(this.userLogin);
        this.router.navigate(['/home']);
      }        
      else
        this.toastr.error("Incorrect password");

    });
    //this.currentUser=new User(this.username, this.password);
    this.userLogin={
      id:1,
      username:'user',
      role:'admin',
      password:'admin'
    }
    //console.log("logn", this.username, this.password);
    
  }
  
}
