import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent as MainLayoutComponent } from './home/layout/layout.component';

const routes: Routes = [
   {path:'', component:MainLayoutComponent},
   { path: '**', redirectTo: '' } // Wildcard route
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
