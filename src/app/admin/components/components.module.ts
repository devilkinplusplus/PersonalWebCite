import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { SkillsModule } from './skills/skills.module';
import { ProfileModule } from './profile/profile.module';
import { ProjectsModule } from './projects/projects.module';
import { MessagesModule } from './messages/messages.module';
import { ManageModule } from './manage/manage.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,DashboardModule,SkillsModule,ProfileModule,ProjectsModule,MessagesModule,ManageModule
  ]
})
export class ComponentsModule { }
