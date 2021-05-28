import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'books-grid',
  templateUrl: './books-grid.component.html',
  styleUrls: ['./books-grid.component.css']
})
export class BooksGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  rowData=[
    { bookId:'123456', title:' Harry Potter', author:'J.K.Rowling'}
    ]
columnDefs = [
    { headerName:"Book", field:"bookId", flex: 1.5 },
    { headerName:"Title ", field:"title", flex: 1.5 },
    { headerName:"Author", field:"author", flex: 1.5 }
  ]

}
