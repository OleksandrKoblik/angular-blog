import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Post} from "../shared/interfaces";
import {Observable, switchMap} from "rxjs";
import {PostService} from "../shared/post.service";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  post$!: Observable<Post>

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.post$ = this.route.params
      .pipe(
        switchMap((params) => {
          return this.postService.getById(params['id'])
        })
      )
  }

}
