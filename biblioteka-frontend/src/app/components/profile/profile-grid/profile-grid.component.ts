import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Books } from '../shared/books';
import { ProfileService } from '../shared/profile.service';

@Component({
  selector: 'profile-grid',
  templateUrl: './profile-grid.component.html',
  styleUrls: ['./profile-grid.component.css']
})
export class ProfileGridComponent implements OnInit {
  idUser:any;
  selectedBookId:any;
  rowData:any[];
  balance:any;
  constructor(private service:ProfileService, private toastr: ToastrService) { 
    this.service.getBooks(this.idUser).subscribe((data:Books[])=>{
      this.rowData=data;
    })
  }
  ngOnInit(): void {
    
  }  
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
    this.service.cancelMembership(this.idUser).subscribe((data:any)=>{
      this.toastr.info("Canceled membership!");
    })
    

  }  
  renewMembership(){
    //post
    
  }
  checkBalance(){
    this.service.checkBalance(this.idUser).subscribe((data:any)=>{
      this.balance=data;
      this.toastr.info("Balance is: ", this.balance);
    })
    
    
  }
}
