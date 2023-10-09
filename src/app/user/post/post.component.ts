import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PostService } from './post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit, AfterViewInit {
  id!: number;
  name!: string;
  detail!: string;
  slug!: string;

  listOtherPost: any;
  constructor(
    private postService: PostService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}
  
  ngAfterViewInit(): void {
    this.slug = this.activatedRoute.snapshot.params['slug'];
    console.log(this.slug);
    this.getPost(this.slug);
  }

  ngOnInit(): void {
     
  }
  
  getPost(slug: string){
    this.postService.getPost(slug).subscribe(res => {
        console.log(res); 
        this.id = res.id;
        this.getOtherPost(this.id);
        this.detail = res.detail;
        this.name = res.name;
    }); 
  }

  getOtherPost(id: number){
    this.postService.getOtherPost(id).subscribe(res => {
        this.listOtherPost = res;
    });
  }
}
