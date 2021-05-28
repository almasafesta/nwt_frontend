import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'approvals-grid',
  templateUrl: './approvals-grid.component.html',
  styleUrls: ['./approvals-grid.component.css']
})
export class ApprovalsGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  rowData=[
    { userId:'123456', firstName:'Almasa', lastName:'Festa', bookId:'123456', bookTitle:' Harry Potter', bookAuthor:'J.K.Rowling', status:'available'}
    ]
columnDefs = [
    { headerName:"User", field:"userId", flex: 1.5 },
    { headerName:"First Name ", field:"firstName", flex: 1.5 },
    { headerName:"Last Name", field:"lastName", flex: 1.5 },
    { headerName:"Book", field:"bookId", flex: 1.5},
    { headerName:"Book title", field:"bookTitle", flex: 1.5},
    { headerName:"Book author", field:"bookAuthor", flex: 1.5},
    { headerName:"Status", field:"status", flex: 1.5}
  ]

}
