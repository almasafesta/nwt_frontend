import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  isLoggedIn$: Observable<boolean>;                  // {1}
  userType: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
    //this.authService.userType.subscribe(value => this.userType = value);
    console.log('type',this.userType);
  }

  onLogout(){
    this.authService.logout();                      // {3}
  }
  

}
