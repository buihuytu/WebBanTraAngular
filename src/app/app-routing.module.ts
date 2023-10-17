import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { AboutComponent } from './user/about/about.component';
import { ContactComponent } from './user/contact/contact.component';
import { NewsComponent } from './user/news/news.component';
import { ProductComponent } from './user/product/product.component';
import { ProductDetailComponent } from './user/product-detail/product-detail.component';
import { ProductNotFoundComponent } from './user/product-not-found/product-not-found.component';
import { PostComponent } from './user/post/post.component';
import { DashboardComponent } from './admin/dashboard/dasboard.component';
import { ListCateComponent } from './admin/category/list-cate/list-cate.component';
import { AddCateComponent } from './admin/category/add-cate/add-cate.component';
import { EditCateComponent } from './admin/category/edit-cate/edit-cate.component';
import { TrashCateComponent } from './admin/category/trash-cate/trash-cate.component';
import { ListUserComponent } from './admin/users/list-user/list-user.component';
import { TrashUserComponent } from './admin/users/trash-user/trash-user.component';
import { ListContactComponent } from './admin/contact/list-contact/list-contact.component';
import { TrashContactComponent } from './admin/contact/trash-contact/trash-contact.component';
import { DetailCateComponent } from './admin/category/detail-cate/detail-cate.component';
import { ReplyContactComponent } from './admin/contact/reply-contact/reply-contact.component';
import { DetailUserComponent } from './admin/users/detail-user/detail-user.component';
import { ListProductComponent } from './admin/product/list-product/list-product.component';
import { AddProductComponent } from './admin/product/add-product/add-product.component';
import { EditProductComponent } from './admin/product/edit-product/edit-product.component';
import { TrashProductComponent } from './admin/product/trash-product/trash-product.component';
import { DetailProductComponent } from './admin/product/detail-product/detail-product.component';
import { AddUserComponent } from './admin/users/add-user/add-user.component';
import { EditUserComponent } from './admin/users/edit-user/edit-user.component';
import { AdminComponent } from './admin/admin.component';
import { WebsiteComponent } from './user/website.component';



const routes: Routes = [
  { 
    path: '', 
    component: WebsiteComponent,
    children: [
      { path: '', component: HomeComponent},
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      {path:'news', component: NewsComponent},
      {path:'post/:slug', component: PostComponent},
      {path:'product', component: ProductComponent},
      {path:'product-detail/:slug', component: ProductDetailComponent},
      {path:'product-not-found', component: ProductNotFoundComponent },
    ]
  },
    
  { 
    path: 'admin', 
    component: AdminComponent,
    children: [
      {path:'dashboard', component: DashboardComponent },
      {path:'category/index', component: ListCateComponent },
      {path:'category/add', component: AddCateComponent },
      {path:'category/edit/:cateId', component: EditCateComponent },
      {path:'category/detail/:cateId', component: DetailCateComponent },
      {path:'category/trash', component: TrashCateComponent },
      {path:'product/index', component: ListProductComponent },
      {path:'product/add', component: AddProductComponent },
      {path:'product/edit/:productId', component: EditProductComponent },
      {path:'product/detail/:productId', component: DetailProductComponent },
      {path:'product/trash', component: TrashProductComponent },
      {path:'user/index', component: ListUserComponent },
      {path:'user/trash', component: TrashUserComponent },
      {path:'user/create', component: TrashUserComponent },
      {path:'user/edit/:userId', component: EditUserComponent },
      {path:'user/detail/:userId', component: DetailUserComponent },
      {path:'contact/index', component: ListContactComponent },
      {path:'contact/trash', component: TrashContactComponent },
      {path:'contact/reply/:contactId', component: ReplyContactComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
