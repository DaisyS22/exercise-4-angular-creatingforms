import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Blog } from '../models/blog';
import { BlogService } from '../services/blog.service';

@Injectable({
  providedIn: 'root',
})
export class BlogResolverService implements Resolve<Blog[]> {
  constructor(
    private dataStorage: DataStorageService,
    private blogService: BlogService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const blogs = this.blogService.getBlogs();

    if (blogs.length === 0) {
      return this.dataStorage.fetchBlogs();
    } else {
      return blogs;
    }
  }
}
