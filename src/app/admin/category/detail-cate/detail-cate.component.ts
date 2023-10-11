import { Component } from '@angular/core';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-detail-cate',
  templateUrl: './detail-cate.component.html',
  styleUrls: ['./detail-cate.component.css']
})
export class DetailCateComponent {
  detailCate!: any;

  constructor(
    private cs: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(query => {
      let id = query.get("cateId");
      this.cs.getById(id).subscribe(res => {
        this.detailCate = res  });
      });
  }
  delTrashCategory(cateId: number) {
    this.cs.delTrashCate(cateId).subscribe(res => {
      alert("Đã đẩy danh mục vào thùng rác")
    })
    this.router.navigate(['/admin/category/index'])
  }
}
