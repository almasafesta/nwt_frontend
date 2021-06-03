import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/components/shared/rest-api.service';

import {ToastrService} from 'ngx-toastr';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee';
import { GridOptions, GridOptionsWrapper } from 'ag-grid-community';

@Component({
  selector: 'employees-grid',
  templateUrl: './employees-grid.component.html',
  styleUrls: ['./employees-grid.component.css']
})
export class EmployeesGridComponent implements OnInit {
  @Output() childToParent = new EventEmitter<String>();
  selectedId:any;
  rowData:any;
  constructor(private service:EmployeeService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getAllEmployees().subscribe((data:Employee[])=>{
      //this.rowData=data;
    })
    this.rowData=[
      { employee:'123456', firstName:' Almasa', lastName:'Festa'},
      { employee:'123456', firstName:' Almasa', lastName:'Festa'},
      { employee:'1234566666', firstName:' Almasa', lastName:'Festa'}
      ]
    
  }
  
columnDefs = [
    { headerName:"Employee", field:"employee", flex: 1.5 },
    { headerName:"First Name", field:"firstName", flex: 1.5 },
    { headerName:"Last Name", field:"lastName", flex: 1.5 }
  ]
  rowSelection = 'single';
  defaultColDef = { 
    resizable: true,
    cellStyle: {color: '#1a3469'}
 }
  onRowClicked(event: any) {
    
    console.log(event); 
    this.selectedId=event.data.employee;
  }
  edit(){
    this.childToParent.emit(this.selectedId);
    /*
    this.api.post('/', this.selectedId).subscribe(response => {
      this.childToParent.emit(this.selectedId);
      if (response && response.payload) {
        this.toastr.success('edited'); //doraditi
      }
    });*/
    
  }
  delete(){
    this.service.deleteEmployee(this.selectedId).subscribe(response=>{
      if (response) {
        this.toastr.success('deleted!');
      }
    })
  }


}
