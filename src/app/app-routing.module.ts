import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { LayoutComponent as MainLayoutComponent } from './home/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    children:[
      { path: '', component: DashboardComponent },
      {
        path: 'manage',
        loadChildren: () =>
          import('./admin/components/manage/manage.module').then(
            (module) => module.ManageModule
          ),
      },
      {
        path: 'messages',
        loadChildren: () =>
          import('./admin/components/messages/messages.module').then(
            (module) => module.MessagesModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./admin/components/profile/profile.module').then(
            (module) => module.ProfileModule
          ),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./admin/components/projects/projects.module').then(
            (module) => module.ProjectsModule
          ),
      },
      {
        path: 'skills',
        loadChildren: () =>
          import('./admin/components/skills/skills.module').then(
            (module) => module.SkillsModule
          ),
      },
    ]
  },
  {path:'', component:MainLayoutComponent},
  {path:"login",
    loadChildren: () =>
    import('./home/components/login/login.module').then(
      (module) => module.LoginModule
    ),}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
