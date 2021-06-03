import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RestApiService } from '../../shared/rest-api.service';

@Component({
  selector: 'profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  editProfile:any;
  firstName:any;
  lastName:any;
  password:any;
  email:any;
  constructor(private api: RestApiService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  edit(){
    this.editProfile={
      firstName:this.firstName,
      lastName:this.lastName,
      password:this.password,
      email:this.email
    }
    this.api.put('/', this.editProfile ).subscribe(() => {
      this.toastr.success("edited");
    });

  }

}
