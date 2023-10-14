import { Component } from '@angular/core';
import { CategoryService } from '../category.service';
@Component({
  selector: 'app-trash-cate',
  templateUrl: './trash-cate.component.html',
  styleUrls: ['./trash-cate.component.css']
})
export class TrashCateComponent {
  listTrashCate:any;
  constructor(private cs : CategoryService) {}
  
  getListTrash() {
    this.cs.getTrash().subscribe(res => {
      this.listTrashCate = res;
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
  delCate(cateId: number) {
    this.cs.deleteCate(cateId).subscribe(res => {
      this.getListTrash();
      alert("Đã xóa danh mục thành công")
    })
  }

  ReTrashCategory(cateId: number) {
    this.cs.ReTrashCate(cateId).subscribe(res => {
      this.getListTrash();
      alert("Đã khôi phục danh mục thành công")
    })
  }
}
