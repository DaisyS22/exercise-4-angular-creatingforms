import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './modules/book/book.component';
import { BookDetailComponent } from './modules/book/pages/book-detail/book-detail.component';
import { BookEditComponent } from './modules/book/pages/book-edit/book-edit.component';
import { BookFormModule } from './modules/book/pages/book-form.module';
import { BookStartComponent } from './modules/book/pages/book-start/book-start.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'full',
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./modules/blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'book',
    // loadChildren: () =>
    //   import('./modules/book/book.module').then((m) => m.BookModule),
    component: BookComponent,
    children: [
      {
        path: '',
        component: BookStartComponent,
      },
      // {
      //   path: 'new',
      //   component: BookEditComponent,
      // },
      {
        path: ':id',
        component: BookDetailComponent,
      },

      {
        path: ':id/edit',
        component: BookEditComponent,
      },
    ],
  },
  {
    path: 'book-form/form',
    loadChildren: () =>
      import('./modules/book/pages/book-form.module').then(
        (m) => m.BookFormModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/profile/user.module').then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
