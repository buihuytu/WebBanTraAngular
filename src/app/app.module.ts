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
import { MenuComponent } from './admin/menu/menu.component';
import { DataTablesModule } from 'angular-datatables';
import { DashboardComponent } from './admin/dashboard/dasboard.component';
import { ListCateComponent } from './admin/category/list-cate/list-cate.component';
import { TrashCateComponent } from './admin/category/trash-cate/trash-cate.component';
import { ListUserComponent } from './admin/users/list-user/list-user.component';
import { TrashUserComponent } from './admin/users/trash-user/trash-user.component';
import { ListContactComponent } from './admin/contact/list-contact/list-contact.component';
import { TrashContactComponent } from './admin/contact/trash-contact/trash-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    ProductComponent,
    ProductDetailComponent,
    ContactComponent,

    MenuComponent,
    DashboardComponent,
    ListCateComponent,
    TrashCateComponent,

    ListUserComponent,
    TrashUserComponent,

    ListContactComponent,
    TrashContactComponent
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
