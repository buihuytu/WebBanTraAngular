import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent {
  listContact:any;
  constructor(private cs : ContactService) {}
  getAll() {
    this.cs.getList().subscribe(res => {
      this.listContact = res.list;
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

  delTrash(contactId: number) {
    this.cs.delTrashContact(contactId).subscribe(res => {
      this.getAll();
      alert("Đã đẩy liên hệ vào thùng rác")
    })
  }
}
