import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


//Components
import { SidebareComponent } from './shared/sidebare/sidebare.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AddInformationComponent } from './features/add-information/add-information.component';
import { ListInformationComponent } from './features/list-information/list-information.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebareComponent,
    NavbarComponent,
    AddInformationComponent,
    ListInformationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
