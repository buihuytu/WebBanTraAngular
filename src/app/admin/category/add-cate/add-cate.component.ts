import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-add-cate',
  templateUrl: './add-cate.component.html',
  styleUrls: ['./add-cate.component.css']
})
export class AddCateComponent {
  submited: boolean = false;
  Name!: string;
  MetaTitle!: string;
  MetaKey!: string;
  MetaDesc!: string;
  IsActive!: number;

  addCategory = this.fb.group({
    Name: ['', Validators.required],
    MetaTitle: ['', Validators.required],
    MetaKey: ['', Validators.required],
    MetaDesc: ['', Validators.required],
    IsActive: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder, 
    private cs: CategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  get f() {return this.addCategory.controls;}

  ngOnInit(): void {}

  onSubmit(): any {
    this.submited = true;
    
    if(!this.addCategory.invalid){
      console.log(this.addCategory.value);
      this.Name= this.addCategory.value.Name!;
      this.MetaDesc = this.addCategory.value.MetaDesc!;
      this.MetaKey = this.addCategory.value.MetaKey!;
      this.MetaTitle = this.addCategory.value.MetaTitle!;
      this.IsActive = +this.addCategory.value.IsActive!;
      
      //thêm mới
      this.cs.addCate( { 
        Name: this.Name,
        MetaTitle: this.MetaTitle,
        MetaKey: this.MetaKey,
        MetaDesc: this.MetaDesc,
        IsActive: this.IsActive}).subscribe(res => {
            if(res.messageStatus == 200){
              alert('Thêm danh mục thành công');
              this.submited = false;
              this.router.navigate(['/admin/category/index'])
              console.log(res);
            }
            else{
              console.log(res);
            }
      })
    }
  }
}
