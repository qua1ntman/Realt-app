import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './authorization/sign-up/sign-up.component';
import { SignInComponent } from './authorization/sign-in/sign-in.component';
import { HttpClientModule }   from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AdsModerationComponent } from './admin/ads-moderation/ads-moderation.component';
import { AdsEditingComponent } from './admin/ads-editing/ads-editing.component';
import { AppealsComponent } from './admin/appeals/appeals.component';
import { CabineteComponent } from './client/cabinete/cabinete.component';
import { EditAdPageComponent } from './client/edit-ad-page/edit-ad-page.component';
import { BulletinBoardComponent } from './unauthorized/bulletin-board/bulletin-board.component';
import { CreateNewAdPageComponent } from './client/create-new-ad-page/create-new-ad-page.component';
import { MapPageComponent } from './unauthorized/map-page/map-page.component';
import { MiniMapComponent } from './unauthorized/mini-map/mini-map.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { ClickStopPropaginationDirective } from './directives/stop-propagination/click-stop-propagination.directive';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    AdminComponent,
    AdsModerationComponent,
    AdsEditingComponent,
    AppealsComponent,
    CabineteComponent,
    EditAdPageComponent,
    BulletinBoardComponent,
    CreateNewAdPageComponent,
    MapPageComponent,
    MiniMapComponent,
    HeaderComponent,
    FooterComponent,
    AuthorizationComponent,
    ClickStopPropaginationDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
