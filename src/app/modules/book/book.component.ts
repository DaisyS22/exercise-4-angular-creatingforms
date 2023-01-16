import { Component, OnInit } from '@angular/core';
import { Book } from './models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  selectedBook: Book;

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
