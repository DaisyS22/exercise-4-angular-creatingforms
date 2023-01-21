import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandBarComponent } from './components/command-bar/command-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { BookFormModule } from '../modules/book/pages/book-form.module';
import { BlogModule } from '../modules/blog/blog.module';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [CommandBarComponent, HeaderComponent],
  imports: [CommonModule, RouterModule, BookFormModule, HttpClientModule],
  exports: [HeaderComponent, CommandBarComponent],
})
export class SharedModule {}
