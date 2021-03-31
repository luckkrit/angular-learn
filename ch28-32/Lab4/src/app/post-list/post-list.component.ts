import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PrettyPrintComponent } from '../pretty-print/pretty-print.component';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts = [];
  @ViewChild('prettyPrintComponent')
  prettyPrintComponent: PrettyPrintComponent;
  addPostStatus = false;
  postForm = this.fb.group({
    userId: ['', Validators.required],
    title: ['', Validators.required],
    body: ['', Validators.required],
  });
  constructor(private httpClient: HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadPost();
  }
  loadPost(): void {
    this.httpClient.get('/api/posts').subscribe((result) => {
      this.posts = result as any[];
      this.posts = this.posts.reverse();
      this.prettyPrintComponent.prettyPrint(this.posts);
    });
  }
  addPost(): void {
    const newPost = this.postForm.value;
    this.httpClient.post('/api/posts', newPost).subscribe((result) => {
      this.addPostStatus = true;
      setTimeout(() => {
        this.postForm.reset();
        this.addPostStatus = false;
      }, 3000);
      this.loadPost();
    });
  }
}
