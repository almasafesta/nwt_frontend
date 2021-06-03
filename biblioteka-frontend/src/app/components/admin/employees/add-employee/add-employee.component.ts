import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/components/shared/rest-api.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeCreate:any;
  firstName:any;
  lastName:any;
  gender:any;
  jobTitle:any;
  dateOfBirth:any;
  status:any;

  constructor(private api: RestApiService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  add(){
    this.employeeCreate={
      firstName:this.firstName,
      lastName:this.lastName,
      gender:this.gender,
      jobTitle:this.jobTitle,
      dateOfBirth:this.dateOfBirth,
      status:this.status
    }
    this.api.post('/', this.employeeCreate ).subscribe(() => {
      this.toastr.success("added");
    });

  }


}
