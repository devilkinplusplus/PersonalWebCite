import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSectionModule } from './main-section/main-section.module';
import { MainSectionComponent } from './main-section/main-section.component';
import { AboutModule } from './about/about.module';
import { SkillsModule } from './skills/skills.module';
import { ProjectsModule } from './projects/projects.module';
import { ContactModule } from './contact/contact.module';
import { LoginModule } from './login/login.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,MainSectionModule,AboutModule,SkillsModule,ProjectsModule,ContactModule,LoginModule
  ]
})
export class ComponentsModule { }
