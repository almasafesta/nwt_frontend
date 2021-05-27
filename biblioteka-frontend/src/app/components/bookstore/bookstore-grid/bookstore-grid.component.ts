import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bookstore-grid',
  templateUrl: './bookstore-grid.component.html',
  styleUrls: ['./bookstore-grid.component.css']
})
export class BookstoreGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  rowData=[
    { title:'Harry Potter', author:' J.K.Rowling', gender:'fiction', status:'available'}
    ]
columnDefs = [
    { headerName:"Title", field:"title", flex: 1.5 },
    { headerName:"Author", field:"author", flex: 1.5 },
    { headerName:"Gender", field:"gender", flex: 1.5 },
    { headerName:"Status", field:"status", flex: 1 },
  ]

}
