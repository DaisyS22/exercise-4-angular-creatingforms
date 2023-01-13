import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})

export class BookListComponent implements OnInit {
  books: any[];


  constructor(private bookService: BookService) {

  }


  ngOnInit() {
    this.books = this.bookService.getBooks();
  }
}



