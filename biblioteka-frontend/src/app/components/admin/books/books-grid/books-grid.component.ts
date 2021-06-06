import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RestApiService } from 'src/app/components/shared/rest-api.service';
import { Books } from '../shared/books';
import { BooksAdminService } from '../shared/books.admin.service';

@Component({
  selector: 'books-grid',
  templateUrl: './books-grid.component.html',
  styleUrls: ['./books-grid.component.css']
})
export class BooksGridComponent implements OnInit {
  @Output() childToParent = new EventEmitter<String>();
  selectedId:any;
  rowData:any;
  constructor(private service:BooksAdminService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getAllBooks().subscribe((data:Books[])=>{
      //this.rowData=data;
    })

    this.rowData=[
      { bookId:'123456', title:' Harry Potter', author:'J.K.Rowling'},
      { bookId:'123456', title:' Harry Potter', author:'J.K.Rowling'},
      { bookId:'123456', title:' Harry Potter', author:'J.K.Rowling'}
      ]

  }
  
columnDefs = [
    { headerName:"Book", field:"bookId", flex: 1.5 },
    { headerName:"Title ", field:"title", flex: 1.5 },
    { headerName:"Author", field:"author", flex: 1.5 }
  ]
  defaultColDef = { 
    resizable: true,
    cellStyle: {color: '#1a3469'}
 }

  onRowClicked(event: any) {
    console.log(event); 
    this.selectedId=event.data.book;
  }

  rowSelection = 'single';
  delete(){
    this.service.deleteBook(this.selectedId).subscribe((response: any)=>{
      if (response) {
        this.toastr.success('deleted!');
      }
    })
  }

}
