import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-user-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  
  listNews: any;

  currentPage: number = 1;
  totalNews: number = 0;
  pageSize: number = 3;
  
  constructor(private newsService: NewsService){
  }


  ngOnInit(): void {
    this.getAll(1);
  }
  
  getAll(page: number){
    this.newsService.getAll(page, this.pageSize).subscribe(res => {
      this.listNews = res.list
      this.totalNews = res.totalNews;
    });
  }

  changePage(page: number): void{
    this.currentPage = page;
    this.getAll(page)
  }
  
}
