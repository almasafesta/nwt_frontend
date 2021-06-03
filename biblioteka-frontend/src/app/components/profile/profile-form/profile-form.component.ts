import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Profile } from '../shared/profile';
import { ProfileService } from '../shared/profile.service';

@Component({
  selector: 'profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  profile:Profile;
  id:any;
  firstName:any;
  lastName:any;
  password:any;
  confirmPassword:any;
  email:any;
  confirmEmail:any;
  constructor(private service: ProfileService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getUser(this.id).subscribe((data:Profile)=>{
      this.profile=data;
    })
  }
  
  edit(){
    if(this.email!=this.confirmEmail || this.password!=this.confirmPassword){
      this.toastr.error("Please enter same email/password!")
    }
    else{
      
    }
    //put
  }

}
