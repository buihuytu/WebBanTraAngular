import { Component, OnInit} from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-edit-cate',
  templateUrl: './edit-cate.component.html',
  styleUrls: ['./edit-cate.component.css']
})  
export class EditCateComponent {
  submited: boolean = false;
  Id!: number;
  Name!: string;
  MetaTitle!: string;
  MetaKey!: string;
  MetaDesc!: string;
  IsActive!: number;

  editCategory = this.fb.group({
    Id: ['', Validators.required],
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

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(query => {
        console.log(query.get("cateId"));   // lay id
        let id = query.get("cateId");
        this.cs.getById(id).subscribe(res => {
            console.log(res); // hien thi ket qua tra ve
            this.editCategory = this.fb.group({
                Id: [res.id, Validators.required],
                Name: [res.name, Validators.required],
                MetaTitle: [res.metaTitle, Validators.required],
                MetaKey: [res.metaKey, Validators.required],
                MetaDesc: [res.metaDesc, Validators.required],
                IsActive: [res.isActive],
            });
        });
    })
  }

  get f() {return this.editCategory.controls;}
  
  onSubmit(): any {
    this.submited = true;
    
    if(!this.editCategory.invalid){
      console.log(this.editCategory.value);
      this.Id = +this.editCategory.value.Id!; // + (conver int)
      this.Name= this.editCategory.value.Name!;
      this.MetaDesc = this.editCategory.value.MetaDesc!;
      this.MetaKey = this.editCategory.value.MetaKey!;
      this.MetaTitle = this.editCategory.value.MetaTitle!;
      this.IsActive = +this.editCategory.value.IsActive!;
      //sửa
      this.cs.editCate(this.Id, { 
        Id: this.Id,
        Name: this.Name,
        MetaTitle: this.MetaTitle,
        MetaKey: this.MetaKey,
        MetaDesc: this.MetaDesc,
        IsActive: this.IsActive}).subscribe(res => {
            if(res.messageStatus == 200){
              alert('Cập nhật danh mục thành công');
              // reset form
              // this.editCategory = this.fb.group({
              //   Id: ['', Validators.required],
              //   Name: ['', Validators.required],
              //   MetaTitle: ['', Validators.required],
              //   MetaKey: ['', Validators.required],
              //   MetaDesc: ['', Validators.required],
              // });
              this.submited = false;
              this.router.navigate(['/admin/category/index'])
            }
            else{
              console.log(res);
            }
      })
    }
  }
}
