import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminChatForAdminComponent } from './admin-chat-for-admin/admin-chat-for-admin.component';
import { AdminComponent } from './admin.component';
import { AdsEditingComponent } from './ads-editing/ads-editing.component';
import { AdsModerationComponent } from './ads-moderation/ads-moderation.component';


const adminRoutes: Routes = [
  {path: '', redirectTo: 'moderation', pathMatch: 'full' },
  {path: 'moderation', component: AdsModerationComponent},
  {path: 'edit', component: AdsEditingComponent},
  {path: 'admin_chat', component: AdminChatForAdminComponent}
];

const appRoutes: Routes = [
  { path: 'admin', component: AdminComponent, children: adminRoutes},
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
