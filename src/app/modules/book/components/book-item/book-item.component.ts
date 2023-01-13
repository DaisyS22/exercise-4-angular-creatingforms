import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {

  @Input() book: any | undefined;
  @Input() bookForm: FormGroup;
 

  constructor(private router: Router, private bookService: BookService) { }

  editBook(book: any) {
    this.router.navigate(['book/form', book]);
    this.bookForm.patchValue({
      name: book.name,
      authors: book.authors,
      isbn: book.isbn,

      
    })
    
    
    localStorage.setItem('name', JSON.stringify(this.bookForm))
    
  }

  


  deleteBook() {
    console.log(`Deleting book: ${this.book.name}`);
  }
}
