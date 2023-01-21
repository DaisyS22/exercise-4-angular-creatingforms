import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../modules/book/services/book.service';
import { Book } from '../modules/book/models/book';
import { map, tap } from 'rxjs/operators';
import { Blog } from '../modules/blog/models/blog';
import { BlogService } from '../modules/blog/services/blog.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private bookService: BookService,
    private blogService: BlogService
  ) {}

  storeBooks() {
    const books = this.bookService.getBooks();
    // store the books to the server
    this.http
      .put('http://localhost:3000/books', books)
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchBooks() {
    return this.http.get<Book[]>('http://localhost:3000/books').pipe(
      map((books) => {
        return books.map((book) => {
          return {
            ...book,
            authors: book.authors ? book.authors : [],
          };
        });
      }),
      tap((books) => {
        this.bookService.setBooks(books);
      })
    );
  }

  storeBlogs() {
    const blogs = this.blogService.getBlogs();
    // store the blogs to the server
    this.http
      .put('http://localhost:3000/blogs', blogs)
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchBlogs() {
    return this.http.get<Blog[]>('http://localhost:3000/blogs').pipe(
      map((blogs) => {
        return blogs.map((blog) => {
          return {
            ...blog,
            comments: blog.comments ? blog.comments : [],
          };
        });
      }),
      tap((blogs) => {
        this.blogService.setBlogs(blogs);
      })
    );
  }
}
