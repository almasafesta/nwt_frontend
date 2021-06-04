import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RestApiService } from 'src/app/components/shared/rest-api.service';
import { Approval } from '../shared/approval';
import { ApprovalService } from '../shared/approval.service';

@Component({
  selector: 'approvals-grid',
  templateUrl: './approvals-grid.component.html',
  styleUrls: ['./approvals-grid.component.css']
})
export class ApprovalsGridComponent implements OnInit {
  @Output() childToParent = new EventEmitter<String>();
  selectedId:any;
  rowData:any;
  constructor(private service:ApprovalService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getAllApprovals().subscribe((data:Approval[])=>{
      //this.rowData=data;
  })

  this.rowData=[
    { userId:'123456', firstName:'Almasa', lastName:'Festa', bookId:'123456', bookTitle:' Harry Potter', bookAuthor:'J.K.Rowling', status:'available'}
    ]
  }
columnDefs = [
    { headerName:"User", field:"userId", flex: 1.5 },
    { headerName:"First Name ", field:"firstName", flex: 1.5 },
    { headerName:"Last Name", field:"lastName", flex: 1.5 },
    { headerName:"Book", field:"bookId", flex: 1.5},
    { headerName:"Book title", field:"bookTitle", flex: 1.5},
    { headerName:"Book author", field:"bookAuthor", flex: 1.5},
    { headerName:"Status", field:"status", flex: 1.5}
  ]
  defaultColDef = { 
    resizable: true,
    cellStyle: {color: '#1a3469'}
 }
  onRowClicked(event: any) {
    console.log(event); 
    this.selectedId=event.data.approval;
  }
  rowSelection = 'single';

  approve(){
  //   this.api.post('/', this.selectedId).subscribe(response=>{
  //     if (response && response.payload) {
  //       this.toastr.success('deleted!');
  //     }
    }
  
  deny(){
  //   this.api.post('/', this.selectedId).subscribe(response=>{
  //     if (response && response.payload) {
  //       this.toastr.success('deleted!');
  //     }
  //   })
  }

}
