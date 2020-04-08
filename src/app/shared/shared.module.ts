import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommentDatePipe } from '../pipe/comment-date.pipe';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CommentDatePipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    CommentDatePipe
  ]
})
export class SharedModule { }
