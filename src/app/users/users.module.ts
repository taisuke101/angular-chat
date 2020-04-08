import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { UsersRoutingModule } from './users-routing.module';

import { NewUserComponent } from './new-user/new-user.component';


@NgModule({
  declarations: [NewUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
