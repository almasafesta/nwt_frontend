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
  selectedId:number;
  dataRows:any[];
  constructor(private service:BooksService) { }

  ngOnInit(): void {
    console.log(this.service.getBooks());
    this.service.getBooks().subscribe((data: any)=>{
      console.log('data',data);
      this.rowData=data;      
      //all books
    }
    )
  }
  
columnDefs = [
    { headerName:"Title", field:"naziv", flex: 1.5 },
    { headerName:"Author", field:"autor", flex: 1.5 },
    { headerName:"Gender", field:"zanr", flex: 1.5 },
    { headerName:"Status", field:"status", flex: 1 },
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
  search(){
    this.service.getBooks().subscribe((data:any)=>{
      console.log(data);
      this.rowData=data;
    })
  }
}
