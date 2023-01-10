import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {

  @Input() book: any | undefined;

  editBook() {
    // logic to edit book goes here
    console.log(`Editing book: ${this.book.name}`);
  }

  deleteBook() {
    // logic to delete book goes here
    console.log(`Deleting book: ${this.book.name}`);
  }
}
