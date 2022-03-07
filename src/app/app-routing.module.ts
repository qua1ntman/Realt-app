import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ChosenAdPageComponent } from './chosen-ad-page/chosen-ad-page.component';
import { MainComponent } from './main/main.component';
import { MapPageComponent } from './map-page/map-page.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';


const appRoutes: Routes = [
  { path: '', redirectTo: environment.routes.main.routeMain, pathMatch: 'full' },
  { path: environment.routes.main.routeMain, component: MainComponent },
  { path: environment.routes.main.routeChosenAd, component: ChosenAdPageComponent},
  { path: environment.routes.main.routeMain, component: MapPageComponent },

  { path: environment.routes.admin.admin, component: AdminComponent, loadChildren: () => import('./admin/admin.module')
    .then(mod => mod.AdminModule)
  },
  { path: environment.routes.client.client, component: ClientComponent, loadChildren: () => import('./client/client.module')
    .then(mod => mod.ClientModule)
  }
];

@NgModule({
  imports: [
  RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }






