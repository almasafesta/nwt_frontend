import { Component, OnInit } from '@angular/core';
import { BooksService } from '../shared/books.service';
import { SearchBooks } from '../shared/search-books';

@Component({
  selector: 'bookstore-form',
  templateUrl: './bookstore-form.component.html',
  styleUrls: ['./bookstore-form.component.css']
})
export class BookstoreFormComponent implements OnInit {
  searchRequest:SearchBooks;
  title:any;
  author:any;
  gender:any;

  constructor(private service:BooksService) { }

  ngOnInit(): void {
  }

}
