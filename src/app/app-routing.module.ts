import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { BlogComponent } from './modules/blog/blog.component';
import { BlogDetailComponent } from './modules/blog/pages/blog-detail/blog-detail.component';
import { BlogEditComponent } from './modules/blog/pages/blog-edit/blog-edit.component';
import { BlogStartComponent } from './modules/blog/pages/blog-start/blog-start.component';
import { BookComponent } from './modules/book/book.component';
import { BookDetailComponent } from './modules/book/pages/book-detail/book-detail.component';
import { BookEditComponent } from './modules/book/pages/book-edit/book-edit.component';
import { BookFormModule } from './modules/book/pages/book-form.module';
import { BookStartComponent } from './modules/book/pages/book-start/book-start.component';
import { BooksResolverService } from './modules/book/resolver/books-resolver.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'full',
  },
  {
    path: 'blog',
    component: BlogComponent,
    children: [
      {
        path: '',
        component: BlogStartComponent,
      },
      {
        path: ':id',
        component: BlogDetailComponent,
      },
      {
        path: ':id/edit',
        component: BlogEditComponent,
      },
    ],
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
        resolve: [BooksResolverService],
      },

      {
        path: ':id/edit',
        component: BookEditComponent,
        resolve: [BooksResolverService],
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
    path: 'blog-form/form',
    loadChildren: () =>
      import('./modules/blog/pages/blog-form/blog-form.module').then(
        (m) => m.BlogFormModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/profile/user.module').then((m) => m.UserModule),
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
