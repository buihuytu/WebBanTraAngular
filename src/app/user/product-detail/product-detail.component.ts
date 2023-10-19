import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductDetailService } from './product-detail.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit, AfterViewInit {
  id!: number;
  slug!: string;
  name!: string;
  price!: number;
  star!: number;
  description!: string;
  listImg: any;

  listOtherProduct: any;

  slideConfig = { 
    slidesToShow: 3, 
    slidesToScroll: 3, 
    nextArrow: '<img class="btnNext-prod" src="../../../assets/Pictures/trang-chu/nextButton.png" >',
    prevArrow: '<img class="btnPrev-prod" src="../../../assets/Pictures/trang-chu/backButton.png" >' 
  };

  slideConfigProductImage ={
    slidesToShow: 1, 
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  };

  slideNavConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: true,
    swipeToSlide: true,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    nextArrow: '<img class="btnNext-slider" src="../../../assets/Pictures/trang-chu/nextButton.png" >',
    prevArrow: '<img class="btnPrev-slider" src="../../../assets/Pictures/trang-chu/backButton.png" >'
  };
  
  constructor(
    private productDetailService: ProductDetailService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
    this.slug = this.activatedRoute.snapshot.params['slug'];
    console.log(this.slug);
    this.getProductDetail(this.slug);
  }
  
  getProductDetail(slug: string) : void {
    this.productDetailService.getProductDetail(slug).subscribe(res => {
        console.log(res); 
        this.id = res.id;
        this.getOtherProduct(this.id);
        this.description = res.description;
        this.name = res.name;
        this.price = res.price;
        this.star = res.star;
        this.getListImgByProductId(this.id);
        console.log(this.name);
    }); 
  }

  getOtherProduct(id: number) : void {
    this.productDetailService.getOtherProduct(id).subscribe(res => {
        this.listOtherProduct = res;
    });
  }

  getListImgByProductId(id: number): void{
    this.productDetailService.getListImgByProductId(id).subscribe(res => {
      this.listImg = res.list;
    });
    console.log(this.listImg);
  }

}
