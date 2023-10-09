import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-user-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  fullName: any;
  email: any;
  phoneNumber: any;
  message: any;
  submited: boolean = false;

  sendMessage = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    message: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder, 
    private cs: ContactService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    
  }

  get f() {return this.sendMessage.controls;}
  
  onSend(): any{
    this.submited = true;

    console.log(this.sendMessage.value);

    if(!this.sendMessage.invalid){
      console.log(1);
      this.fullName= this.sendMessage.value.fullName;
      this.email = this.sendMessage.value.email;
      this.phoneNumber = this.sendMessage.value.phoneNumber;
      this.message = this.sendMessage.value.message;
      

      //them moi
      this.cs.add( { 
        fullName: this.fullName,
        email: this.email,
        phone: this.phoneNumber,
        detail: this.message}).subscribe(res => {
            // reset form
            if(res.messageStatus == 200){
              alert('Gửi thành công');
              this.sendMessage = this.fb.group({
                fullName: ['', Validators.required],
                email: ['', Validators.required],
                phoneNumber: ['', Validators.required],
                message: ['', Validators.required],
              });
              this.submited = false;
            }
            else{
              console.log(res);
            }
      })
    }

    
    
    
  }
}
