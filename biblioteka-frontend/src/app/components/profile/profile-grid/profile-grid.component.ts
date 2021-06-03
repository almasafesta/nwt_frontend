import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RestApiService} from '../../shared/rest-api.service';

@Component({
  selector: 'profile-grid',
  templateUrl: './profile-grid.component.html',
  styleUrls: ['./profile-grid.component.css']
})
export class ProfileGridComponent {
  selectedBookId:any;
  canceledMembership:any;
  renewedMembership:any;
  idPerson:any;
  constructor(private api:RestApiService, private toastr: ToastrService) { }
  rowData=[
    { book:'Harry Potter', dueDate:' 01/01/2001', toPay:'5€', status:'available'}
    ]
  columnDefs = [
      
    { headerName:"Book", field:"book", flex: 1.5 },
    { headerName:"Due date", field:"dueDate", flex: 1.5 },
    { headerName:"To pay", field:"toPay", flex: 1.5 },
    { headerName:"Status", field:"status", flex: 1 },
    { headerName:"Review", field:"review", flex:1}
  ]
  defaultColDef = { 
    resizable: true,
    cellStyle: {color: '#1a3469'}
 }
  onRowClicked(event: any) {
    event.node.gridOptionsWrapper.highlighted="true";
    console.log(event); 
    this.selectedBookId=event.data.bookId;
    console.log('row', this.selectedBookId); 
  }
  rowSelection = 'multiple';
  cancelMembership(){
    this.canceledMembership=true;
    this.api.put('/', this.canceledMembership).subscribe(() => {
      this.toastr.success("Membership canceled");
    });

  }  
  renewMembership(){
    this.renewedMembership=true;
    this.api.put('/', this.canceledMembership).subscribe(() => {
      this.toastr.success("Membership renewed!");
    });
  }
  checkBalance(){
    this.api.get('/', this.idPerson)
  }
}
