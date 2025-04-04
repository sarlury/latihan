import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ParentComponent } from './pages/parent/parent.component';
import { KelasComponent } from './pages/kelas/kelas.component';
import { ReativeFormsComponent } from './pertemuan 6/reative-forms/reative-forms.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'forms', pathMatch: 'full'
  },
  {
    path: 'parent', component: ParentComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'kelas', component: KelasComponent
  },
  {
    path: 'forms', component: ReativeFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
