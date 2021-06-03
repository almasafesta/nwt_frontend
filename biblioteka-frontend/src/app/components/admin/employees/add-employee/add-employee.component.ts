import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/components/shared/rest-api.service';
import {ToastrService} from 'ngx-toastr';
import { EmployeeService } from '../shared/employee.service';
import { EmployeeCreate } from '../shared/employee-create';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee:EmployeeCreate;

  constructor(private service: EmployeeService, private toastr: ToastrService) {
    this.employee=new EmployeeCreate();
   }

  ngOnInit(): void {
  }
  add(){
    
    this.service.addEmployee() //doraditi

  }


}
