import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  listUser:any;
  constructor(private us : UsersService) {}
  getAll(): void {
    this.us.getList().subscribe(res => {
      this.listUser = res.list;
      setTimeout(()=>{   
        $('#datatableexample').DataTable( {
          pagingType: 'full_numbers',
          pageLength: 10,
          processing: true,
          lengthMenu : [10, 15, 20],
      } );
      }, 1);
    })
  }
  ngOnInit(): void {
    console.log(1);
    this.getAll();
    setTimeout(()=>{  
      $('#datatableexample_wrapper').css('width', '100%');
    }, 100);
    
  }

  delTrash(userId: number): void {
    this.us.delTrashUser(userId).subscribe(res => {
      this.getAll();
      alert("Đã đẩy thành viên vào thùng rác")
    })
  }

  changeActive(userId: number): void {
    this.us.ChangeStatus(userId).subscribe(res => {
      this.getAll();
      alert("Thay đổi trạng thái thành công");
    })
  }
}
