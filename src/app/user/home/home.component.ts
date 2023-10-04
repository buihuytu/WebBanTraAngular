import { Component } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  slidesSlider = [
    { img: '../assets/Pictures/trang-chu/backBanner.png' },
    { img: '../assets/Pictures/trang-chu/backBanner.png' },
    { img: '../assets/Pictures/trang-chu/backBanner.png' },
    { img: '../assets/Pictures/trang-chu/backBanner.png' },
    { img: '../assets/Pictures/trang-chu/backBanner.png' },
  ];
  slidesHotProducts = [
    { img: '../assets/Pictures/trang-chu/product-1.png' },
    { img: '../assets/Pictures/trang-chu/product-2.png' },
    { img: '../assets/Pictures/trang-chu/product-3.png' },
    { img: '../assets/Pictures/trang-chu/product-4.png' },
    { img: '../assets/Pictures/trang-chu/product-4.png' },
  ];
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };
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
}
