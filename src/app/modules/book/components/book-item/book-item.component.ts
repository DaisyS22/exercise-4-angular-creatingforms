import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  @Output() bookSelected = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSelected() {
    this.bookSelected.emit();
  }
}
