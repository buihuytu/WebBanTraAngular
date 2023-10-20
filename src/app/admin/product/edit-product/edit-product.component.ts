import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../category/category.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  submited: boolean = false;
  Id!: number;
  Name!: string;
  CateId!: number;
  Mass!: number;
  Price!: number;
  Description!: string;
  Detail!: string;
  IsActive!: number;
  FileImage!: File;
  listCategory: any;

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Times New Roman',
   
  };

  editProduct = this.fb.group({
    Id: [''],
    Name: ['', Validators.required],
    CateId: ['', Validators.required],
    Mass: ['', Validators.required],
    Price: ['', Validators.required],
    Description: [''],
    Detail: [''],
    IsActive: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder, 
    private us: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cs: CategoryService,
  ) { }

  get f() {return this.editProduct.controls;}

  ngOnInit(): void {
    this.cs.getList().subscribe(res => {
      this.listCategory = res.list;
    });

    this.activatedRoute.paramMap.subscribe(query => {
      console.log(query.get("productId"));   // lay id
      let id = query.get("productId");
      this.us.getProductById(id).subscribe(res => {
          console.log(res); // hien thi ket qua tra ve
          this.editProduct = this.fb.group({
              Id: [res.id],
              Name: [res.name, Validators.required],
              CateId: [res.cateId, Validators.required],
              Mass: [res.mass, Validators.required],
              Price: [res.price, Validators.required],
              Description: [res.description],
              Detail: [res.detail],
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
    
    if(!this.editProduct.invalid){
      console.log(this.editProduct.value);
      this.Id = +this.editProduct.value.Id!;
      this.Name= this.editProduct.value.Name!;
      this.CateId = +this.editProduct.value.CateId!;
      this.Mass = +this.editProduct.value.Mass!;
      this.Price = +this.editProduct.value.Price!;
      this.Description = this.editProduct.value.Description!;
      this.Detail = this.editProduct.value.Detail!;
      this.IsActive = +this.editProduct.value.IsActive!;
      
      console.log(this.FileImage)
      var formEdit = new FormData();
      formEdit.append("Name", this.Name);
      formEdit.append("CateId", this.CateId.toString());
      formEdit.append("Mass", this.Mass.toString());
      formEdit.append("Price", this.Price.toString());
      formEdit.append("Description", this.Description);
      formEdit.append("Detail", this.Detail);
      formEdit.append("IsActive", this.IsActive.toString());
      formEdit.append("FileImage", this.FileImage);

      console.log(formEdit)
      //sửa
      this.us.editProduct(this.Id, formEdit).subscribe(res => {
            if(res.messageStatus == 200){
              alert('Cập nhật san pham thành công');
              this.submited = false;
              this.router.navigate(['/admin/product/index'])
              console.log(res);
            }
            else{
              console.log(res);
            }
      })
    }
  }
}
