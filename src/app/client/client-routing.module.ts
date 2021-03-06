import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminChatComponent } from './admin-chat/admin-chat.component';
import { CreateNewAdPageComponent } from './create-new-ad-page/create-new-ad-page.component';
import { ClientComponent } from './client.component';
import { ClientAdsComponent } from './client-ads/client-ads.component';
import { EditAdPageComponent } from './edit-ad-page/edit-ad-page.component';
import { environment } from 'src/environments/environment';


const myAdsRoutes: Routes = [
  {path: 'published', component: ClientAdsComponent},
  {path: 'penging_review', component: ClientAdsComponent},
  {path: 'refused', component: ClientAdsComponent},
  {path: 'deactivated', component: ClientAdsComponent},
];

const clientPageRoutes: Routes = [
  { path: '', redirectTo: environment.routes.client.clientChild.myAds, pathMatch: 'full' },
  { path: environment.routes.client.clientChild.myAds, component: ClientAdsComponent, children: myAdsRoutes },
  { path: environment.routes.client.clientChild.create, component: CreateNewAdPageComponent },
  { path: environment.routes.client.clientChild.editPage, component: EditAdPageComponent },
  { path: environment.routes.client.clientChild.chatWithAdmin, component: AdminChatComponent },
];

const accountRoutes: Routes = [
  { path: environment.routes.client.client, component: ClientComponent, children: clientPageRoutes },
];


@NgModule({
  imports: [RouterModule.forChild(clientPageRoutes)],
exports: [RouterModule]
})
export class ClientRoutingModule { }
