import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent {
  @Input() book: Book;
  constructor(private router: Router, private bookService: BookService) {}

  editBook(book: any) {
    this.router.navigate(['book-form/form', book]);

    // localStorage.setItem('name', JSON.stringify(this.bookForm))
  }

  deleteBook() {
    // console.log(`Deleting book: ${this.book.name}`);
  }
}
