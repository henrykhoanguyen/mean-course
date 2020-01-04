import { Component, OnInit, Input } from '@angular/core';

import { Post } from "../post.model";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // private posts = [
  //   {title: "First Post", content: "This is the First post"},
  //   {title: "Second Post", content: "This is the Second post"},
  //   {title: "Third Post", content: "This is the Third post"},
  // ];

  @Input() posts: Post[] = [];

  constructor() { }

  ngOnInit() {
  }

}
