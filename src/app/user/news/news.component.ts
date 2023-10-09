import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-user-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  
  listNews: any;
  
  constructor(private newsService: NewsService){
  }


  ngOnInit(): void {
    this.getAll();
  }
  
  getAll(){
    this.newsService.getAll().subscribe(res => {
      this.listNews = res.list
    });
  }
  
}
