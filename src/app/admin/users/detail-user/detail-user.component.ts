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
    private us: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(query => {
      let id = query.get("userId");
      this.us.getUserById(id).subscribe(res => {
        this.detailUser = res  });
      });
  }

  delTrash(userId: number) {
    this.us.delTrashUser(userId).subscribe(res => {
      alert("Đã đẩy thành viên vào thùng rác")
    })
    this.router.navigate(['/admin/user/index'])
  }
}
