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
    nextArrow: '<img class="btnNext-prod" style="position: absolute;top: 40%;right: -5%;cursor: pointer;" src="../../../assets/Pictures/trang-chu/nextButton.png" >',
    prevArrow: '<img class="btnPrev-prod" style="position: absolute;top: 40%;left: -5%;cursor: pointer;" src="../../../assets/Pictures/trang-chu/backButton.png" >' 
  };
  slideConfigSlider = { 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  

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
