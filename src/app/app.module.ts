import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginDashboardComponent } from './pages/login-dashboard/login-dashboard.component';
import { ChildComponent } from './pages/child/child.component';
import { ParentComponent } from './pages/parent/parent.component';
import { TextTransformPipe } from './pipe/text-transform.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MuridComponent } from './pages/murid/murid.component';
import { KelasComponent } from './pages/kelas/kelas.component';
import { ReativeFormsComponent } from './pertemuan 6/reative-forms/reative-forms.component';
import { ParentModulePage } from './pages/parent/parent.module';
import { HeadOfficeComponent } from './pertemuan 7/head-office/head-office.component';
import { BranchOfficeSatuComponent } from './pertemuan 7/branch-office-satu/branch-office-satu.component';
import { BranchOfficeDuaComponent } from './pertemuan 7/branch-office-dua/branch-office-dua.component';
import { HeadOfficePageModule } from './pertemuan 7/head-office/head-office.module';
import { HttpClientModule } from '@angular/common/http';
import { DisplayListComponent } from './pertemuan 8/display-list/display-list.component';
import { StateMgmComponent } from './pertemuan 9/state-mgm/state-mgm.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginDashboardComponent,
    TextTransformPipe,
    MuridComponent,
    KelasComponent,
    ReativeFormsComponent,
    BranchOfficeSatuComponent,
    BranchOfficeDuaComponent,
    DisplayListComponent,
    StateMgmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ParentModulePage,
    HeadOfficePageModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
