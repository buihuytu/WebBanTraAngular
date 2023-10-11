import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  listUser:any;
  constructor(private us : UsersService) {}
  dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 10,
    processing: true,
    lengthMenu : [10, 15, 20]
  }
  getAll() {
    this.us.getList().subscribe(res => {
      this.listUser = res.list;
    })
  }
  ngOnInit(): void {
    this.getAll();
    setTimeout(()=>{  
      $('#datatableexample_wrapper').css('width', '100%');
    }, 100);
    
  }
}
