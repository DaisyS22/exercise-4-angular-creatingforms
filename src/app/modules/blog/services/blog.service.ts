import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs: any[] = [
    {
      name: 1,
      title: 'How to cook an egg',
      description: 'This is a description of how to cook an egg',
      author: 'Rogelio Umbay',
      comments: [
        {
          name: 'daisy',
          comment: 'i love eggs',
          
        }
      ]
    },
    {
      id: 2,
      title: 'How to cook an pancake',
      description: 'This is a description of how to cook a pancake',
      author: 'Rogelio Umbay',
      comments: [
        {
          name: 'daisy',
          comment: 'i love pancakes',
          
        }
      ]
    }
  ];
    

  constructor() { 
}

getBlogs() {
    return this.blogs;
  }
}