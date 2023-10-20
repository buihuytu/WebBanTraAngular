import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-trash-contact',
  templateUrl: './trash-contact.component.html',
  styleUrls: ['./trash-contact.component.css']
})
export class TrashContactComponent {
  listTrashContact:any;
  constructor(private cs : ContactService) {}
  getListTrash() {
    this.cs.getTrash().subscribe(res => {
      this.listTrashContact = res;
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

  reTrash(contactId: number): void {
    this.cs.reTrashContact(contactId).subscribe(res => {
      this.getListTrash();
      alert("Đã khôi phục liên hệ thành công")
    })
  }

  delContact(cateId: number): void {
    this.cs.deleteContact(cateId).subscribe(res => {
      this.getListTrash();
      alert("Đã xóa liên hệ thành công")
    })
  }
}
