import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  @Input() id:any;
  selectedId:any;

  constructor() { }

  ngOnInit(): void {
  }
  childToParent(selectedID:any){
    this.selectedId=selectedID;
    }

}
