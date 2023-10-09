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
  dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 10,
    processing: true,
    lengthMenu : [10, 15, 20]
  }
  getListTrash() {
    this.cs.getTrash().subscribe(res => {
      this.listTrashContact = res;
    })
  }
  ngOnInit(): void {
    this.getListTrash();
    setTimeout(()=>{  
      $('#datatableexample_wrapper').css('width', '100%');
    }, 100);
    
  }
}
