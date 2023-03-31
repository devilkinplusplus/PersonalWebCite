import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';
import { MainSectionModule } from '../components/main-section/main-section.module';
import { AboutModule } from '../components/about/about.module';
import { ContactModule } from '../components/contact/contact.module';
import { SkillsModule } from '../components/skills/skills.module';
import { ProjectsModule } from '../components/projects/projects.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,MainSectionModule,AboutModule,SkillsModule,ProjectsModule,ContactModule,RouterModule
  ]
})
export class LayoutModule { }
