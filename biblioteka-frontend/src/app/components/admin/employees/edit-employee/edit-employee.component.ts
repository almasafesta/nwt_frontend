import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmployeeCreate } from '../shared/employee-create';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employee:EmployeeCreate;
  constructor(private service: EmployeeService, private toastr: ToastrService) {
    this.employee=new EmployeeCreate();
   }

  ngOnInit(): void {
  }
  edit() {
    this.service.editEmployee() //doraditi
  }

}
