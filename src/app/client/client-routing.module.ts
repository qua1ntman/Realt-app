import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminChatComponent } from './admin-chat/admin-chat.component';
import { CreateNewAdPageComponent } from './create-new-ad-page/create-new-ad-page.component';
import { ClientComponent } from './client.component';
import { ClientAdsComponent } from './client-ads/client-ads.component';
import { EditAdPageComponent } from './edit-ad-page/edit-ad-page.component';


const myAdsRoutes: Routes = [
  {path: 'published', component: ClientAdsComponent},
  {path: 'penging_review', component: ClientAdsComponent},
  {path: 'refused', component: ClientAdsComponent},
  {path: 'deactivated', component: ClientAdsComponent},
];

const clientPageRoutes: Routes = [
  { path: '', redirectTo: 'my_page', pathMatch: 'full' },
  { path: 'my_ads', component: ClientAdsComponent, children: myAdsRoutes },
  { path: 'create', component: CreateNewAdPageComponent },
  { path: 'edit', component: EditAdPageComponent },
  { path: 'chat_with_admin', component: AdminChatComponent },
];

const accountRoutes: Routes = [
  { path: 'client', component: ClientComponent, children: clientPageRoutes },
];

@NgModule({
  imports: [RouterModule.forChild(accountRoutes)],
exports: [RouterModule]
})
export class ClientRoutingModule { }
