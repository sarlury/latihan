import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginDashboardComponent } from './pages/login-dashboard/login-dashboard.component';
import { ChildComponent } from './pages/child/child.component';
import { ParentComponent } from './pages/parent/parent.component';
import { TextTransformPipe } from './pipe/text-transform.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginDashboardComponent,
    ChildComponent,
    ParentComponent,
    TextTransformPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
