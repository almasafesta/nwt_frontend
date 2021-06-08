import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login/shared/login.service';
import { AuthService } from '../shared/authentication.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userRegister:User;
  username:string;
  password:string;

  constructor(private loginService: LoginService, private router: Router, private toastr: ToastrService,private authService: AuthService) { }

  ngOnInit(): void {
  }
  register(){
    this.userRegister=new User();
    this.userRegister.username=this.username;
    this.userRegister.password=this.password;
    this.userRegister.role="user";
    this.userRegister.id=Math.floor((Math.random() * 100) + 1);
    this.loginService.register(this.userRegister).subscribe((data: any)=>{
      console.log("register", data);
      

    });
  }
}
