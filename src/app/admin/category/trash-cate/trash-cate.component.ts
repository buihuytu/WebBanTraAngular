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
  dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 10,
    processing: true,
    lengthMenu : [10, 15, 20]
  }
  getListTrash() {
    this.cs.getTrash().subscribe(res => {
      this.listTrashCate = res;
    })
  }
  ngOnInit(): void {
    this.getListTrash();
    setTimeout(()=>{  
      $('#datatableexample_wrapper').css('width', '100%');
    }, 100);
    
  }
}
