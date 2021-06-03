import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RestApiService } from 'src/app/components/shared/rest-api.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookCreate:any;
  bookTitle:any;
  author:any;
  category:any;
  publisher:any;
  status:any;
  constructor(private api: RestApiService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  add(){
    this.bookCreate={
      bookTitle:this.bookTitle,
      author:this.author,
      category:this.category,
      publisher:this.publisher,
      status:this.status
    }
    this.api.post('/', this.bookCreate ).subscribe(() => {
      this.toastr.success("added");
    });

  }
}
