import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { formatNumber } from '@angular/common';
@Component({
  selector: 'app-user-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, AfterViewInit{

  listCategory: any[] = [];
  listProduct: any[] = [];
  errorMessage!: string;

  sortCode: number = 0;
  vendors = [
    { name: 'Thứ tự mặc định', sortCode: 0 },
    { name: 'Xếp theo giá giảm dần', sortCode: 1 },
    { name: 'Xếp theo giá tăng dần', sortCode: 2 },
  ];


  currentPage: number = 1;
  totalProduct: number = 0;
  pageSize: number = 9;

  startRange: number = 0;
  endRange: number = 0;

  isChecked!: boolean;
  listCate: any[] = [];
  
  constructor(
    private productService: ProductService,
    private cd: ChangeDetectorRef
  ){
  }
  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
    this.getAllCategory();
    this.getProduct(1);   
  }

  getAllCategory(): void{
    this.productService.getAllCategory().subscribe(res => {
      //this.listCategory = res.list;
      var listRes = res.list;
      listRes.forEach(x => this.listCategory.push({
        id: x.id,
        name: x.name,
        checked: false
      }))
    })
    console.log(this.listCategory)
  }

  getProduct(pageNo: number): void{
    this.productService.getAll(pageNo, this.pageSize, this.sortCode).subscribe(res => {
      this.listProduct = res.list;
      this.totalProduct = res.countProduct;
    });
  }

  changePage(page: number): void{
    console.log(this.listCate.length);
    this.currentPage = page;
    if((this.endRange == 0 && this.startRange == 0) && this.listCate.length == 0){
      this.getProduct(page)
    }
    else if((this.endRange == 0 && this.startRange == 0) && this.listCate.length != 0){
      this.getProductByCate();
    }
    else if((this.endRange != 0 || this.startRange != 0) && this.listCate.length == 0){
      this.changeRange();    
    }
  }


  mySelectHandler(sortCode: any): void{
    console.log(sortCode);
    this.sortCode = sortCode;
    this.getProduct(this.currentPage);
    this.startRange = 0;
    this.endRange = 0;
    this.isChecked = false;
    this.listCategory.forEach(child => {
      child.checked = false
    })
  }

  changeRange(): void {
    this.listCategory.forEach(child => {
      child.checked = false
    })
    this.listCate = this.listCate.filter(x => x.id == '0')
    console.log(this.listCategory.length);
    console.log(this.startRange, this.endRange);
    this.productService.getAllProductByPriceRange(this.startRange, this.endRange, this.currentPage).subscribe(res => {
      this.listProduct = res.list;
      this.totalProduct = res.countProduct;
    });
  }

  cateChange(id: number): void{
    this.startRange = 0;
    this.sortCode = 0;
    this.endRange = 0;
    this.currentPage = 1;
    if(this.listCate.indexOf(id) !== -1){
      this.listCate.forEach((element,index)=>{
        if(element==id) this.listCate.splice(index,1);
      });
    }
    else{
      this.listCate.push(id);
    }
    console.log(this.listCate);    
    this.getProductByCate()
  }

  getProductByCate(): void{
    this.productService.getProductByCategory(this.currentPage, this.pageSize, this.listCate).subscribe(res => {
      this.listProduct = res.list;
      this.totalProduct = res.countProduct;
    });
  }
}
