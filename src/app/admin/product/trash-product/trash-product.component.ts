import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-trash-product',
  templateUrl: './trash-product.component.html',
  styleUrls: ['./trash-product.component.css']
})
export class TrashProductComponent {
listTrashProduct:any;
  constructor(private cs : ProductService) {}
  
  getListTrash() {
    this.cs.getTrashProduct().subscribe(res => {
      this.listTrashProduct = res;
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
  delProduct(productId: number) {
    this.cs.deleteProduct(productId).subscribe(res => {
      this.getListTrash();
      alert("Đã xóa san pham thành công")
    })
  }

  ReTrashProduct(productId: number) {
    this.cs.ReTrashProduct(productId).subscribe(res => {
      this.getListTrash();
      alert("Đã khôi phục san pham thành công")
    })
  }
}
