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
      console.log(data)
      this.rowData=data;
    })
  }
    
  
columnDefs = [
    { headerName:"Book", field:"id", flex: 1.5 },
    { headerName:"Title ", field:"naziv", flex: 1.5 },
    { headerName:"Author", field:"autor", flex: 1.5 }
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
