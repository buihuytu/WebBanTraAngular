import { Component } from '@angular/core';
import { ProductImageService } from '../product-image.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-list-image',
  templateUrl: './list-image.component.html',
  styleUrls: ['./list-image.component.css']
})
export class ListImageComponent {
  listImage!: any;
  FileImage!: File;
  Id!: number
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
    this.FileImage = event.target.files;
  }

  onSubmit(): void {
    this.activatedRoute.paramMap.subscribe(query => {
      let id = query.get("productId");
      var addForm = new FormData();
      // addForm.append("IdProduct");
      this.pis.addProductImage(addForm)
    })
  }
}
