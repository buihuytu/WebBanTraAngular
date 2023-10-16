import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
  listProduct:any;
  constructor(private cs : ProductService) {}
  getAll() {
    this.cs.getList().subscribe(res => {
      this.listProduct = res.list;
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

  delTrashProduct(productId: number) {
    this.cs.delTrashProduct(productId).subscribe(res => {
      this.getAll();
      alert("Đã đẩy san pham vào thùng rác")
    })
  }

  changeActive(productId: number) {
    this.cs.ChangeStatus(productId).subscribe(res => {
      // this.getAll();
      alert("Thay đổi trạng thái thành công");
    })
  }
}
