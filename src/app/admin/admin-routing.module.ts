import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { EditAdPageComponent } from '../client/edit-ad-page/edit-ad-page.component';
import { AdminChatForAdminComponent } from './admin-chat-for-admin/admin-chat-for-admin.component';
import { AdsEditingComponent } from './ads-editing/ads-editing.component';
import { AdsModerationComponent } from './ads-moderation/ads-moderation.component';


const adminRoutes: Routes = [
  {path: '', redirectTo: 'moderation', pathMatch: 'full' },
  {path: environment.routes.admin.adminChild.moderation, component: AdsModerationComponent},
  {path: environment.routes.admin.adminChild.edit, component: AdsEditingComponent},
  { path: environment.routes.admin.adminChild.editPage, component: EditAdPageComponent },
  {path: environment.routes.admin.adminChild.adminChat, component: AdminChatForAdminComponent}
];


@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
