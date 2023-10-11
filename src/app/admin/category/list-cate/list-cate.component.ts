import { Component } from '@angular/core';
import { CategoryService } from '../category.service';
@Component({
  selector: 'app-list-cate',
  templateUrl: './list-cate.component.html',
  styleUrls: ['./list-cate.component.css']
})
export class ListCateComponent {
  listCate:any;
  constructor(private cs : CategoryService) {}
  getAll() {
    this.cs.getList().subscribe(res => {
      this.listCate = res.list;
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

  delTrashCategory(cateId: number) {
    this.cs.delTrashCate(cateId).subscribe(res => {
      this.getAll();
      alert("Đã đẩy danh mục vào thùng rác")
    })
  }
}
