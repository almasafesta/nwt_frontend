import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-grid',
  templateUrl: './profile-grid.component.html',
  styleUrls: ['./profile-grid.component.css']
})
export class ProfileGridComponent {
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
  
}
