import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employees-grid',
  templateUrl: './employees-grid.component.html',
  styleUrls: ['./employees-grid.component.css']
})
export class EmployeesGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  rowData=[
    { employee:'123456', firstName:' Almasa', lastName:'Festa'}
    ]
columnDefs = [
    { headerName:"Employee", field:"employee", flex: 1.5 },
    { headerName:"First Name", field:"firstName", flex: 1.5 },
    { headerName:"Last Name", field:"lastName", flex: 1.5 }
  ]

}
