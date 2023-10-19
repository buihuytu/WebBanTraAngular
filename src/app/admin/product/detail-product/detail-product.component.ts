import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
detailProduct!: any;

  constructor(
    private ps: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(query => {
      let id = query.get("productId");
      this.ps.getProductById(id).subscribe(res => {
        this.detailProduct = res  });
      });
  }

  delTrash(productId: number) {
    this.ps.delTrashProduct(productId).subscribe(res => {
      alert("Đã đẩy san pham vào thùng rác")
    })
    this.router.navigate(['/admin/product/index'])
  }
}
