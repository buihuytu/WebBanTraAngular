import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent {
  detailUser!: any;

  constructor(
    private cs: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(query => {
      let id = query.get("userId");
      this.cs.getUserById(id).subscribe(res => {
        this.detailUser = res  });
      });
  }

  // delTrashCategory(cateId: number) {
  //   this.cs.delTrashCate(cateId).subscribe(res => {
  //     alert("Đã đẩy danh mục vào thùng rác")
  //   })
  //   this.router.navigate(['/admin/category/index'])
  // }
}
