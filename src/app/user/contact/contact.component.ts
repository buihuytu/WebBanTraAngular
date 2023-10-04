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
      return false;
    }

    this.fullName= this.sendMessage.value.fullName;
    this.email = this.sendMessage.value.email;
    this.phoneNumber = this.sendMessage.value.phoneNumber;
    this.message = this.sendMessage.value.message;
    
    // add to object
    var val = new FormData();
    val.append("Fullname", this.fullName);
    val.append("Email", this.email);
    val.append("PhoneNumber", this.phoneNumber);
    val.append("Message", this.message);
    
    console.log();

    //them moi
    // this.cs.add(val).subscribe(res => {
    //   console.log(res);    
    //   alert("Add Successfully!!!");
    //   this.router.navigate(['/product'])
    // })
    
    // reset form
    this.sendMessage = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
}
