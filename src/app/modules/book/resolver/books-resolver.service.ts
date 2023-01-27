import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { BookService } from '../services/book.service';

import { Book } from '../models/book';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Injectable({
  providedIn: 'root',
})
export class BooksResolverService implements Resolve<Book[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private bookService: BookService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const books = this.bookService.getBooks();

    if (books.length === 0) {
      return this.dataStorageService.fetchBooks();
    } else {
      return books;
    }
  }
}
