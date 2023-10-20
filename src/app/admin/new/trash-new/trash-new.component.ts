import { Component } from '@angular/core';
import { NewService } from '../new.service';

@Component({
  selector: 'app-trash-new',
  templateUrl: './trash-new.component.html',
  styleUrls: ['./trash-new.component.css']
})
export class TrashNewComponent {
listTrashNew:any;
  constructor(private cs : NewService) {}
  
  getListTrash() {
    this.cs.getTrash().subscribe(res => {
      this.listTrashNew = res;
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
    this.getListTrash();
    setTimeout(()=>{  
      $('#datatableexample_wrapper').css('width', '100%');
    }, 1000);
    
  }
  delNew(newId: number) {
    this.cs.deleteNew(newId).subscribe(res => {
      this.getListTrash();
      alert("Đã xóa bài viết thành công")
    })
  }

  ReTrashNew(newId: number) {
    this.cs.ReTrashNew(newId).subscribe(res => {
      this.getListTrash();
      alert("Đã khôi phục bài viết thành công")
    })
  }
}
