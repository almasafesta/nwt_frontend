import { Component, OnInit } from '@angular/core';
import { Books } from '../shared/books';
import { BooksService } from '../shared/books.service';
import { SearchBooks } from '../shared/search-books';

@Component({
  selector: 'bookstore-grid',
  templateUrl: './bookstore-grid.component.html',
  styleUrls: ['./bookstore-grid.component.css']
})
export class BookstoreGridComponent implements OnInit {
  searchRequest:SearchBooks;
  title:any;
  author:any;
  gender:any;
  rowData:any;
  constructor(private service:BooksService) { }

  ngOnInit(): void {
    this.service.getBooks().subscribe((data: Books[])=>{
      this.rowData=data;
      //all books
    }
    )
  }
  
columnDefs = [
    { headerName:"Title", field:"title", flex: 1.5 },
    { headerName:"Author", field:"author", flex: 1.5 },
    { headerName:"Gender", field:"gender", flex: 1.5 },
    { headerName:"Status", field:"status", flex: 1 },
  ]
  search(){
    this.service.getBooks().subscribe((data:Books[])=>{
      this.rowData=data;
    })
  }
}
