import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ParentComponent } from './pages/parent/parent.component';
import { KelasComponent } from './pages/kelas/kelas.component';
import { ReativeFormsComponent } from './pertemuan 6/reative-forms/reative-forms.component';
import { ChildComponent } from './pages/child/child.component';
import { HeadOfficeComponent } from './pertemuan 7/head-office/head-office.component';
import { BranchOfficeSatuComponent } from './pertemuan 7/branch-office-satu/branch-office-satu.component';
import { BranchOfficeDuaComponent } from './pertemuan 7/branch-office-dua/branch-office-dua.component';
import { DisplayListComponent } from './pertemuan 8/display-list/display-list.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'displayList', pathMatch: 'full'
  },
  {
    path: 'parent',
    loadChildren: () => import('./pages/parent/parent.module').then(m => m.ParentModulePage)
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'kelas', component: KelasComponent
  },
  {
    path: 'forms', component: ReativeFormsComponent
  },
  {
    path: 'child/:id', component: ChildComponent
  },
  {
    path: 'headOffice', 
    loadChildren: () => import('./pertemuan 7/head-office/head-office.module').then(m => m.HeadOfficePageModule)
  },
  {
    path: 'branchSatu', component: BranchOfficeSatuComponent
  },
  {
    path: 'branchDua/:id', component: BranchOfficeDuaComponent
  },
  {
    path: 'displayList', component: DisplayListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
