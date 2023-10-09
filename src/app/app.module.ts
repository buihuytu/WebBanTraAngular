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
<<<<<<< HEAD
import { NewsComponent } from './user/news/news.component';
import { PostComponent } from './user/post/post.component';
=======
import { MenuComponent } from './admin/menu/menu.component';
import { DataTablesModule } from 'angular-datatables';
import { DashboardComponent } from './admin/dashboard/dasboard.component';
import { ListCateComponent } from './admin/category/list-cate/list-cate.component';
import { TrashCateComponent } from './admin/category/trash-cate/trash-cate.component';
import { ListUserComponent } from './admin/users/list-user/list-user.component';
import { TrashUserComponent } from './admin/users/trash-user/trash-user.component';
import { ListContactComponent } from './admin/contact/list-contact/list-contact.component';
import { TrashContactComponent } from './admin/contact/trash-contact/trash-contact.component';
>>>>>>> a08f30c150b2911922a89b2dfbfd2a58064959f0

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    ProductComponent,
    ProductDetailComponent,
    ContactComponent,
<<<<<<< HEAD
    NewsComponent,
    PostComponent,
=======

    MenuComponent,
    DashboardComponent,
    ListCateComponent,
    TrashCateComponent,

    ListUserComponent,
    TrashUserComponent,

    ListContactComponent,
    TrashContactComponent
>>>>>>> a08f30c150b2911922a89b2dfbfd2a58064959f0
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SlickCarouselModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
