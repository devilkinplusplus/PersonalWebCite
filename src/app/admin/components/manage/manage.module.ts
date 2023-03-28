import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ManageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ManageComponent }]),
  ]
})
export class ManageModule { }
