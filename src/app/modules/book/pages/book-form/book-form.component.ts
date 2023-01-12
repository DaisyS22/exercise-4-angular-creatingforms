import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.bookForm = this.fb.group({
      name: [''],
      authors: this.fb.array([]),
      isbn: ['']
    });
    



}
  ngOnInit(): void {

    this.bookForm.valueChanges.subscribe(console.log);

  }

  onSubmit = () => {
  
    const theBook:Book = this.bookForm.getRawValue() as Book;
    console.log(theBook);
}

  


}
