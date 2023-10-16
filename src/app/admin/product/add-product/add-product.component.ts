import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
submited: boolean = false;
  Name!: string;
  MetaTitle!: string;
  MetaKey!: string;
  MetaDesc!: string;
  IsActive!: number;

  addProduct = this.fb.group({
    Name: ['', Validators.required],
    MetaTitle: ['', Validators.required],
    MetaKey: ['', Validators.required],
    MetaDesc: ['', Validators.required],
    IsActive: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder, 
    private cs: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  get f() {return this.addProduct.controls;}

  ngOnInit(): void {}

  onSubmit(): any {
    this.submited = true;
    
    if(!this.addProduct.invalid){
      console.log(this.addProduct.value);
      this.Name= this.addProduct.value.Name!;
      this.MetaDesc = this.addProduct.value.MetaDesc!;
      this.MetaKey = this.addProduct.value.MetaKey!;
      this.MetaTitle = this.addProduct.value.MetaTitle!;
      this.IsActive = +this.addProduct.value.IsActive!;
      
      //thêm mới
      this.cs.addProduct( { 
        Name: this.Name,
        MetaTitle: this.MetaTitle,
        MetaKey: this.MetaKey,
        MetaDesc: this.MetaDesc,
        IsActive: this.IsActive}).subscribe(res => {
            if(res.messageStatus == 200){
              alert('Thêm san pham thành công');
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
