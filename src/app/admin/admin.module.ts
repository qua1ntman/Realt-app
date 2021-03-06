import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminChatForAdminComponent } from './admin-chat-for-admin/admin-chat-for-admin.component';
console.warn('admin module has been loaded');


@NgModule({
  declarations: [
    AdminChatForAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
