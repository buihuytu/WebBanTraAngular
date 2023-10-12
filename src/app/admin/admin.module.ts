import { NgModule } from '@angular/core';
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

@NgModule({
    imports: [
      RouterModule.forChild(AdminRoutes),
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
      DetailUserComponent
    ]
})
export class AdminModule {
}
