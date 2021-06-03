import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/components/shared/rest-api.service';

import {ToastrService} from 'ngx-toastr';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'employees-grid',
  templateUrl: './employees-grid.component.html',
  styleUrls: ['./employees-grid.component.css']
})
export class EmployeesGridComponent implements OnInit {
  @Output() childToParent = new EventEmitter<String>();
  selectedId:any;
  constructor(private api:RestApiService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  rowData=[
    { employee:'123456', firstName:' Almasa', lastName:'Festa'},
    { employee:'1234566666', firstName:' Almasa', lastName:'Festa'}
    ]
columnDefs = [
    { headerName:"Employee", field:"employee", flex: 1.5 },
    { headerName:"First Name", field:"firstName", flex: 1.5 },
    { headerName:"Last Name", field:"lastName", flex: 1.5 }
  ]
  rowSelection = 'multiple';
  defaultColDef = { 
    resizable: true,
    cellStyle: {color: '#1a3469'},
    checkboxSelection: true,
 }
  onRowClicked(event: any) {
    event.node.gridOptionsWrapper.highlighted="true";
    console.log(event); 
    this.selectedId=event.data.employee;
    console.log('row', this.selectedId); 
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
    this.api.delete('/', this.selectedId).subscribe(response=>{
      if (response && response.payload) {
        this.toastr.success('deleted!');
      }
    })
  }


}
