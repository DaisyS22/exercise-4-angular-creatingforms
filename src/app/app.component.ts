import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'simple-crud';

  // observe
  // behavior = new BehaviorSubject(Books[]);
  // books = this.behavior.asObservable();
}
