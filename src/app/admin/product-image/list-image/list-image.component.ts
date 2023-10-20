import { Component } from '@angular/core';
import { ProductImageService } from '../product-image.service';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '@angular/animations';
@Component({
  selector: 'app-list-image',
  templateUrl: './list-image.component.html',
  styleUrls: ['./list-image.component.css']
})
export class ListImageComponent {
  listImage!: any;
  FileImage!: File;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private pis: ProductImageService,
  ) { }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(query => {
      console.log(query.get("productId"));   // lay id
      let id = query.get("productId");
      this.pis.getListImage(id).subscribe(res => {
        this.listImage = res.list;
      });
  })
  }

  onChange(event: any) {
    this.FileImage = event.target.files[0];
  }

  onSubmit(): void {
    this.activatedRoute.paramMap.subscribe(query => {
      let id = query.get("productId")!;
      var addForm = new FormData();
      addForm.append("IdProduct", id);
      addForm.append("FileImage", this.FileImage);
      this.pis.addProductImage(addForm).subscribe(res => {
        if(res.messageStatus == 200){
              alert('Thêm ảnh sản phẩm thành công');
          //this.router.navigate(['/admin/product-img/', id])
          window.location.reload();
              console.log(res);
            }
            else{
              console.log(res);
            }
      })
    })
  }

  DelImage(imageId: any): void {
    this.activatedRoute.paramMap.subscribe(query => {
      let id = query.get("productId")!;
      this.pis.deleteProductImage(id, imageId).subscribe(res => {
        if(res.messageStatus == 200){
              alert('Xóa ảnh sản phẩm thành công');
          //this.router.navigate(['/admin/product-img/', id])
          window.location.reload();
              console.log(res);
            }
            else{
              console.log(res);
            }
      })
    })
  }
}
