import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: any[] = [
    {
      id: 1,
      name: '境界の彼方',
      authors: ['Taichi Ishidate'],
      isbn: '978-0062315007'
    },
    {
      id: 2,
      name: 'あそびあそばせ',
      authors: ['Seiji Kishi'],
      isbn: '978-0743273567'
    },
    {
      id: 3,
      name: '四月は君の嘘',
      authors: ['Takehiko Shinjō'],
      isbn: '978-0446310789'
    }
  ];

  constructor() {}

  

  getBooks() {
    return this.books;
    // return this.https.get('http://localhost:3000/books')
  }
}
