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

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'news', component: NewsComponent},
  {path:'post/:slug', component: PostComponent},
  {path:'product', component: ProductComponent},
  {path:'product-detail', component: ProductDetailComponent},
  {path:'product-not-found', component: ProductNotFoundComponent },

  {path:'admin/dashboard', component: DashboardComponent },
  {path:'admin/category/index', component: ListCateComponent },
  {path:'admin/category/add', component: AddCateComponent },
  {path:'admin/category/edit/:cateId', component: EditCateComponent },
  {path:'admin/category/detail/:cateId', component: DetailCateComponent },
  {path:'admin/category/trash', component: TrashCateComponent },
  {path:'admin/user/index', component: ListUserComponent },
  {path:'admin/user/trash', component: TrashUserComponent },
  {path:'admin/user/detail/:userId', component: DetailUserComponent },
  {path:'admin/contact/index', component: ListContactComponent },
  {path:'admin/contact/trash', component: TrashContactComponent },
  {path:'admin/contact/reply/:contactId', component: ReplyContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
