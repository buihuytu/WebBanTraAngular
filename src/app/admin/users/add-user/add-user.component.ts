import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  submited: boolean = false;
  FullName!: string;
  UserName!: string;
  PassWord!: string;
  Address!: string;
  Email!: string;
  Phone!: string;
  Role!: number;
  IsActive!: number;
  FileImage!: File;

  addUser = this.fb.group({
    FullName: ['', Validators.required],
    UserName: ['', Validators.required],
    PassWord: ['', Validators.required],
    Address: ['', Validators.required],
    Email: ['', Validators.required],
    Phone: ['', Validators.required],
    Role: ['', Validators.required],
    IsActive: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder, 
    private us: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  get f() {return this.addUser.controls;}

  ngOnInit(): void {}
  
  onChange(event: any) {
    this.FileImage = event.target.files[0];
  }

  onSubmit(): any {
    this.submited = true;
    
    if(!this.addUser.invalid){
      console.log(this.addUser.value);
      this.FullName= this.addUser.value.FullName!;
      this.Address = this.addUser.value.Address!;
      this.PassWord = this.addUser.value.PassWord!;
      this.UserName = this.addUser.value.UserName!;
      this.Email = this.addUser.value.Email!;
      this.Phone = this.addUser.value.Phone!;
      this.Role = +this.addUser.value.Role!;
      this.IsActive = +this.addUser.value.IsActive!;
      
      console.log(this.FileImage)
      var formAdd = new FormData();
      formAdd.append("FullName", this.FullName);
      formAdd.append("Address", this.Address);
      formAdd.append("PassWord", this.PassWord);
      formAdd.append("UserName", this.UserName);
      formAdd.append("Email", this.Email);
      formAdd.append("Phone", this.Phone);
      formAdd.append("Role", this.Role.toString());
      formAdd.append("IsActive", this.IsActive.toString());
      formAdd.append("FileImage", this.FileImage);

      console.log(formAdd)
      //thêm mới
      this.us.createUser(formAdd).subscribe(res => {
            if(res.messageStatus == 200){
              alert('Thêm thành viên thành công');
              this.submited = false;
              this.router.navigate(['/admin/user/index'])
              console.log(res);
            }
            else{
              console.log(res);
            }
      })
    }
  }
}
