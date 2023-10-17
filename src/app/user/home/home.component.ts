import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  slidesSlider: any[] = [];
  slidesHotProducts: any[] = [];

  slideConfig = { 
    slidesToShow: 4, 
    slidesToScroll: 4,
    nextArrow: '<img class="btnNext-prod" src="../../../assets/Pictures/trang-chu/nextButton.png" >',
    prevArrow: '<img class="btnPrev-prod" src="../../../assets/Pictures/trang-chu/backButton.png" >' 
  };
  slideConfigSlider = { slidesToShow: 1, slidesToScroll: 1 };
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }

  constructor(private ps: HomeService){}

  getAll(){
    this.ps.getListSlider().subscribe(res => {
      res.list.filter((x: any) => this.slidesSlider.push(x));
    });
  }

  getHotProduct(){
    this.ps.getHotProduct().subscribe(res => {
      this.slidesHotProducts =  res.list;
    })
  }

  ngOnInit(){
    this.getAll();
    this.getHotProduct();
  }
}
