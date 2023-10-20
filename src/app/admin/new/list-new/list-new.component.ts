import { Component } from '@angular/core';
import { NewService } from '../new.service';

@Component({
  selector: 'app-list-new',
  templateUrl: './list-new.component.html',
  styleUrls: ['./list-new.component.css']
})
export class ListNewComponent {
listNews:any;
  constructor(private cs : NewService) {}
  getAll() {
    this.cs.getList().subscribe(res => {
      this.listNews = res.list;
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
    this.getAll();
    setTimeout(()=>{  
      $('#datatableexample_wrapper').css('width', '100%');
    }, 1000);
    
  }

  delTrashNew(newId: number) {
    this.cs.delTrashNew(newId).subscribe(res => {
      this.getAll();
      alert("Đã đẩy bai viet vào thùng rác")
    })
  }

  changeActive(newId: number) {
    this.cs.ChangeStatus(newId).subscribe(res => {
      // this.getAll();
      alert("Thay đổi trạng thái thành công");
    })
  }
}
