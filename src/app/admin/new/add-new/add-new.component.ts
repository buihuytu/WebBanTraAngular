import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NewService } from '../new.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent {
submited: boolean = false;
  Name!: string;
  Detail!: string;
  Summary!: string;
  IsActive!: number;
  FileImage!: File;
  
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Times New Roman',
   
  };

  addNew = this.fb.group({
    Name: ['', Validators.required],
    Detail: ['', Validators.required],
    Summary: ['', Validators.required],
    IsActive: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder, 
    private us: NewService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  get f() {return this.addNew.controls;}

  ngOnInit(): void {}
  
  onChange(event: any) {
    this.FileImage = event.target.files[0];
  }

  onSubmit(): any {
    this.submited = true;
    if(!this.addNew.invalid){
      console.log(this.addNew.value);
      this.Name= this.addNew.value.Name!;
      this.Detail = this.addNew.value.Detail!;
      this.Summary = this.addNew.value.Summary!;
      this.IsActive = +this.addNew.value.IsActive!;
      
      console.log(this.FileImage)
      var formAdd = new FormData();
      formAdd.append("name", this.Name);
      formAdd.append("summary", this.Summary);
      formAdd.append("detail", this.Detail);
      formAdd.append("IsActive", this.IsActive.toString());
      formAdd.append("FileImage", this.FileImage);

      console.log(formAdd)
      //thêm mới
      this.us.createNew(formAdd).subscribe(res => {
            if(res.messageStatus == 200){
              alert('Thêm bài viết thành công');
              this.submited = false;
              this.router.navigate(['/admin/new/index'])
              console.log(res);
            }
            else{
              console.log(res);
            }
      })
    }
  }
}
