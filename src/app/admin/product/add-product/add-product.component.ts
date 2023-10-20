import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../category/category.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  submited: boolean = false;
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

  addProduct = this.fb.group({
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
    private cs : CategoryService,
  ) { }

  get f() {return this.addProduct.controls;}

  ngOnInit(): void {
    this.cs.getList().subscribe(res => {
      this.listCategory = res.list;
    })
  }
  
  onChange(event: any) {
    this.FileImage = event.target.files[0];
  }

  onSubmit(): any {
    this.submited = true;
    if(!this.addProduct.invalid){
      console.log(this.addProduct.value);
      this.Name= this.addProduct.value.Name!;
      this.CateId = +this.addProduct.value.CateId!;
      this.Mass = +this.addProduct.value.Mass!;
      this.Price = +this.addProduct.value.Price!;
      this.Description = this.addProduct.value.Description!;
      this.Detail = this.addProduct.value.Detail!;
      this.IsActive = +this.addProduct.value.IsActive!;
      
      console.log(this.FileImage)
      var formAdd = new FormData();
      formAdd.append("Name", this.Name);
      formAdd.append("CateId", this.CateId.toString());
      formAdd.append("Mass", this.Mass.toString());
      formAdd.append("Price", this.Price.toString());
      formAdd.append("Description", this.Description);
      formAdd.append("Detail", this.Detail);
      formAdd.append("IsActive", this.IsActive.toString());
      formAdd.append("FileImage", this.FileImage);

      console.log(formAdd)
      //thêm mới
      this.us.addProduct(formAdd).subscribe(res => {
            if(res.messageStatus == 200){
              alert('Thêm san pham thành công');
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
