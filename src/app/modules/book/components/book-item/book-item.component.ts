import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {

  @Input() book: any | undefined;


  constructor(private router: Router) { }

  editBook() {
    
    this.router.navigate(['book/form']);
    true;

  }

  deleteBook() {
  
    console.log(`Deleting book: ${this.book.name}`);
  }
}
