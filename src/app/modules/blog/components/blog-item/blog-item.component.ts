import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent {

  @Input() blog: any;

  editBook() {
    // logic to edit book goes here
    console.log(`Editing book: ${this.blog.name}`);
  }

  deleteBook() {
    // logic to delete book goes here
    console.log(`Deleting book: ${this.blog.name}`);
  }

}
