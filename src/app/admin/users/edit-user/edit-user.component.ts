import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  submited: boolean = false;
  Id!: number;
  FullName!: string;
  UserName!: string;
  PassWord!: string;
  Address!: string;
  Email!: string;
  Phone!: string;
  Role!: number;
  IsActive!: number;
  FileImage!: File;

  editUser = this.fb.group({
    Id: [''],
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

  get f() {return this.editUser.controls;}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(query => {
      console.log(query.get("userId"));   // lay id
      let id = query.get("userId");
      this.us.getUserById(id).subscribe(res => {
          console.log(res); // hien thi ket qua tra ve
          this.editUser = this.fb.group({
              Id: [res.id],
              FullName: [res.fullName, Validators.required],
              UserName: [res.userName, Validators.required],
              PassWord: [res.password, Validators.required],
              Address: [res.address, Validators.required],
              Email: [res.email, Validators.required],
              Phone: [res.phone, Validators.required],
              Role: [res.role, Validators.required],
              IsActive: [res.isActive, Validators.required],
          });
      });
  })
  }
  
  onChange(event: any) {
    this.FileImage = event.target.files[0];
  }

  onSubmit(): any {
    this.submited = true;
    
    if(!this.editUser.invalid){
      console.log(this.editUser.value);
      this.Id = +this.editUser.value.Id!;
      this.FullName= this.editUser.value.FullName!;
      this.Address = this.editUser.value.Address!;
      this.PassWord = this.editUser.value.PassWord!;
      this.UserName = this.editUser.value.UserName!;
      this.Email = this.editUser.value.Email!;
      this.Phone = this.editUser.value.Phone!;
      this.Role = +this.editUser.value.Role!;
      this.IsActive = +this.editUser.value.IsActive!;
      
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
      //sửa
      this.us.editUser(this.Id, formAdd).subscribe(res => {
            if(res.messageStatus == 200){
              alert('Cập nhật thành viên thành công');
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
