import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reply-contact',
  templateUrl: './reply-contact.component.html',
  styleUrls: ['./reply-contact.component.css']
})
export class ReplyContactComponent {
  submited: boolean = false;
  Id!: number;
  FullName!: string;
  Email!: string;
  Phone!: string;
  Detail!: string;
  Reply!: string;

  repContact = this.fb.group({
    Id: [''],
    FullName: [''],
    Email: [''],
    Phone: [''],
    Detail: [''],
    Reply: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder, 
    private cs: ContactService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(query => {
        console.log(query.get("contactId"));   // lay id
        let id = query.get("contactId");
        this.cs.getContactById(id).subscribe(res => {
            console.log(res); // hien thi ket qua tra ve
            this.repContact = this.fb.group({
              Id: [res.id],
              FullName: [res.fullName],
              Email: [res.email],
              Phone: [res.phone],
              Detail: [res.detail],
              Reply: [res.reply, Validators.required],
            });
        });
    })
  }

  get f() {return this.repContact.controls;}
  
  onSubmit(): any {
    this.submited = true;
    
    if(!this.repContact.invalid){
      console.log(this.repContact.value);
      this.Id = +this.repContact.value.Id!;
      this.FullName= this.repContact.value.FullName!;
      this.Email = this.repContact.value.Email!;
      this.Phone = this.repContact.value.Phone!;
      this.Detail = this.repContact.value.Detail!;
      this.Reply = this.repContact.value.Reply!;
      
      //sửa
      this.cs.replyContact(this.Id, { 
        Id: this.Id,
        FullName: this.FullName,
        Email: this.Email,
        Phone: this.Phone,
        Detail: this.Detail,
        Reply: this.Reply}).subscribe(res => {
            if(res.messageStatus == 200){
              alert('Trả lời liên hệ thành công');
              this.submited = false;
              this.router.navigate(['/admin/contact/index'])
            }
            else{
              console.log(res);
            }
      })
    }
  }
}
