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
  cateById: any;

  Id: any;
  Name: any;
  MetaTitle: any;
  MetaKey: any;
  MetaDesc: any;

  editCategory = this.fb.group({
    Id: ['', Validators.required],
    Name: ['', Validators.required],
    MetaTitle: ['', Validators.required],
    MetaKey: ['', Validators.required],
    MetaDesc: ['', Validators.required],
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
                Id: [res.cateId, Validators.required],
                Name: [res.cateName, Validators.required],
                MetaTitle: [res.cateMetaTitle, Validators.required],
                MetaKey: [res.cateMetaKey, Validators.required],
                MetaDesc: [res.cateMetaDesc, Validators.required],
            });
        });
    })
  }


  onSubmit() {
    if(!this.editCategory.invalid){
        console.log(this.editCategory.value);
    }
    
    this.Id = this.editCategory.value.Id;
    this.Name= this.editCategory.value.Name;
    this.MetaDesc = this.editCategory.value.MetaDesc;
    this.MetaKey = this.editCategory.value.MetaKey;
    this.MetaTitle = this.editCategory.value.MetaTitle;
    

    var val = new FormData();
    val.append("Id", this.Id);
    val.append("Name", this.Name);
    val.append("MetaTitle", this.MetaTitle);
    val.append("MetaKey", this.MetaKey);
    val.append("MetaDesc", this.MetaDesc);
    
    //sua
    this.cs.editCate(this.Id, val).subscribe(res => {
        console.log(res);    
        alert("Edit Successfully!!!");
        this.router.navigate(['/category/index'])
    })
  }
}
