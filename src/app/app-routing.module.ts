import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './pages/post/post.component';
import { CategoryMaintenanceComponent } from './pages/category-maintenance/category-maintenance.component';

const routes: Routes = [
  {
    path:'categories',
    component: CategoryMaintenanceComponent
  },
  {
    path:'post',
    component: PostComponent
  },
  {
    path:'', redirectTo: '/post',
    pathMatch: 'full'
    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
