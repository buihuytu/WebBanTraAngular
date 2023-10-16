import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminRoutes } from './admin.routing';
import { MenuComponent } from './menu/menu.component';
import { ListCateComponent } from './category/list-cate/list-cate.component';
import { AddCateComponent } from './category/add-cate/add-cate.component';
import { EditCateComponent } from './category/edit-cate/edit-cate.component';
import { TrashCateComponent } from './category/trash-cate/trash-cate.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { TrashUserComponent } from './users/trash-user/trash-user.component';
import { ListContactComponent } from './contact/list-contact/list-contact.component';
import { TrashContactComponent } from './contact/trash-contact/trash-contact.component';
import { DetailCateComponent } from './category/detail-cate/detail-cate.component';
import { ReplyContactComponent } from './contact/reply-contact/reply-contact.component';
import { DetailUserComponent } from './users/detail-user/detail-user.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { DetailProductComponent } from './product/detail-product/detail-product.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { TrashProductComponent } from './product/trash-product/trash-product.component';
import { AddImageComponent } from './product-image/add-image/add-image.component';
import { TrashImageComponent } from './product-image/trash-image/trash-image.component';
import { BrowserModule } from '@angular/platform-browser';
import { ListImageComponent } from './product-image/list-image/list-image.component';

@NgModule({
    imports: [
    RouterModule.forChild(AdminRoutes),
      BrowserModule
    ],
    declarations: [
      MenuComponent,
      AddCateComponent,
      EditCateComponent,
      ListCateComponent,
      TrashCateComponent,
      ListUserComponent,
      TrashUserComponent,
      ListContactComponent,
      TrashContactComponent,
      DetailCateComponent,
      ReplyContactComponent,
      DetailUserComponent,
      AddProductComponent,
      EditProductComponent,
      DetailProductComponent,
      ListProductComponent,
      TrashProductComponent,
      AddImageComponent,
      TrashImageComponent,
      ListImageComponent
  ]
})
export class AdminModule {
}
