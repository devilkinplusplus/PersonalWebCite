import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,

  ],
  imports: [
    CommonModule,RouterModule
  ]
})
export class LayoutModule { }
