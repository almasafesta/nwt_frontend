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
  selectedId:any;
  constructor(private service:ProfileService, private toastr: ToastrService) { 
    //IdUser
    this.service.getBooks().subscribe((data:Books[])=>{
      console.log(data);
      this.rowData=data;
    })
  }
  ngOnInit(): void {
    
  }  
  columnDefs = [
      
    { headerName:"Book", field:"naziv", flex: 1.5 },
    { headerName:"Due date", field:"dueDate", flex: 1.5 },
    { headerName:"To pay", field:"toPay", flex: 1.5 },
    { headerName:"Review", field:"review", flex:1}
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
