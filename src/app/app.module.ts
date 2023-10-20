import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './user/footer/footer.component';
import { HeaderComponent } from './user/header/header.component';
import { ProductComponent } from './user/product/product.component';
import { ProductDetailComponent } from './user/product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './user/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeComponent } from './user/home/home.component';
import { NewsComponent } from './user/news/news.component';
import { PostComponent } from './user/post/post.component';
import { MenuComponent } from './admin/menu/menu.component';
import { DashboardComponent } from './admin/dashboard/dasboard.component';
import { ListCateComponent } from './admin/category/list-cate/list-cate.component';
import { TrashCateComponent } from './admin/category/trash-cate/trash-cate.component';
import { ListUserComponent } from './admin/users/list-user/list-user.component';
import { TrashUserComponent } from './admin/users/trash-user/trash-user.component';
import { ListContactComponent } from './admin/contact/list-contact/list-contact.component';
import { TrashContactComponent } from './admin/contact/trash-contact/trash-contact.component';
import { EditCateComponent } from './admin/category/edit-cate/edit-cate.component';
import { AddCateComponent } from './admin/category/add-cate/add-cate.component';
import { DetailCateComponent } from './admin/category/detail-cate/detail-cate.component';
import { ReplyContactComponent } from './admin/contact/reply-contact/reply-contact.component';
import { DetailUserComponent } from './admin/users/detail-user/detail-user.component';
import { ListProductComponent } from './admin/product/list-product/list-product.component';
import { TrashProductComponent } from './admin/product/trash-product/trash-product.component';
import { EditProductComponent } from './admin/product/edit-product/edit-product.component';
import { AddProductComponent } from './admin/product/add-product/add-product.component';
import { DetailProductComponent } from './admin/product/detail-product/detail-product.component';
import { AddUserComponent } from './admin/users/add-user/add-user.component';
import { EditUserComponent } from './admin/users/edit-user/edit-user.component';

import { DataTablesModule } from 'angular-datatables';
import { PaginationComponent } from './user/pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WebsiteComponent } from './user/website.component';
import { AdminComponent } from './admin/admin.component';
import { MatSliderModule } from '@angular/material/slider'
import { AdminModule } from './admin/admin.module';
import { ListImageComponent } from './admin/product-image/list-image/list-image.component';
import { AddImageComponent } from './admin/product-image/add-image/add-image.component';
import { TrashImageComponent } from './admin/product-image/trash-image/trash-image.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularEditorComponent, AngularEditorModule } from '@kolkov/angular-editor';
import { ListNewComponent } from './admin/new/list-new/list-new.component';
import { TrashNewComponent } from './admin/new/trash-new/trash-new.component';
import { AddNewComponent } from './admin/new/add-new/add-new.component';
@NgModule({
  declarations: [
    AppComponent,
    WebsiteComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    ProductComponent,
    ProductDetailComponent,
    ContactComponent,
    NewsComponent,
    PostComponent,
    PaginationComponent,

    MenuComponent,
    AdminComponent,
    DashboardComponent,
    ListCateComponent,
    TrashCateComponent,
    EditCateComponent,
    AddCateComponent,
    DetailCateComponent,
    ListUserComponent,
    TrashUserComponent,
    DetailUserComponent,
    ListProductComponent,
    TrashProductComponent,
    EditProductComponent,
    AddProductComponent,
    DetailProductComponent,
    ListImageComponent,
    AddUserComponent,
    EditUserComponent,
    ListContactComponent,
    TrashContactComponent,
    ReplyContactComponent,
    AddImageComponent,
    TrashImageComponent,
    ListImageComponent,
    ListNewComponent,
    TrashNewComponent,
    AddNewComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SlickCarouselModule,
    DataTablesModule,
    CommonModule,
    MatSliderModule,
    BrowserAnimationsModule,
    AngularEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
