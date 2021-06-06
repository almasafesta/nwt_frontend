import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/authentication.service';
import { User } from '../shared/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currentUser:User;
  username:string;
  password:string;

  constructor(private router: Router, private toastr: ToastrService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    //console.log("logn", this.username, this.password);
    this.authService.login(this.username,this.password)
    this.router.navigate(['/home']);
  }
}
