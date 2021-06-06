import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/authentication.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  user:User;
  isUserLoggedIn:boolean;

  constructor(private authService:AuthService, private toastr: ToastrService) { }
  LoginStatus$ : Observable<boolean>;

    UserName$ : Observable<string>;
    ngOnInit(): void {
      this.LoginStatus$ = this.authService.isLoggesIn;
      this.UserName$ = this.authService.currentUserName;



      this.user= this.authService.currentUser;   
      console.log('user',this.user)
      this.isUserLoggedIn=this.authService.isLoggedIn();   
      console.log('is', this.isUserLoggedIn);
  }

}
