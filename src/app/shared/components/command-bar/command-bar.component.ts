import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss'],
})
export class CommandBarComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  onDeleteAll() {
    // wala pa to next exercise pa
  }

  onNewBook() {
    // router to book-form component
    this.router.navigate(['book-form/form']);
  }
}
