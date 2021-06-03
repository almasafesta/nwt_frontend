import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RestApiService } from 'src/app/components/shared/rest-api.service';
import { Books } from '../shared/books';
import { BooksService } from '../shared/books.service';

@Component({
  selector: 'books-grid',
  templateUrl: './books-grid.component.html',
  styleUrls: ['./books-grid.component.css']
})
export class BooksGridComponent implements OnInit {
  selectedId:any;
  rowData:any;
  constructor(private service:BooksService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getAllBooks().subscribe((data:Books[])=>{
      this.rowData=data;
    })
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
    event.node.gridOptionsWrapper.highlighted="true";
    console.log(event); 
    this.selectedId=event.data.bookId;
    console.log('row', this.selectedId); 
  }
  rowSelection = 'multiple';
  delete(){
    this.service.deleteBook(this.selectedId).subscribe(response=>{
      if (response) {
        this.toastr.success('deleted!');
      }
    })
  }

}
