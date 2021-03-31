import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PrettyPrintComponent } from '../pretty-print/pretty-print.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}
  posts = [];
  @ViewChild('prettyPrintComponent')
  prettyPrintComponent: PrettyPrintComponent;

  ngOnInit(): void {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((result) => {
        this.posts = result as any[];
        this.prettyPrintComponent.prettyPrint(this.posts);
      });
  }
}
