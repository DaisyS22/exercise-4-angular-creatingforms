import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss'],
})
export class BlogFormComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  onCancel() {
    // this.router.navigate(['book'], { relativeTo: this.route });
    // create a router what will navigate to the parent route
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
