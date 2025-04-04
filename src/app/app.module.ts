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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginDashboardComponent,
    ChildComponent,
    ParentComponent,
    TextTransformPipe,
    MuridComponent,
    KelasComponent,
    ReativeFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
