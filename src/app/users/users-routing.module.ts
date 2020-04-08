import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
  { path: 'new', component: NewUserComponent}
]

@NgModule({
  declarations: [
    NewUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersRoutingModule { }
