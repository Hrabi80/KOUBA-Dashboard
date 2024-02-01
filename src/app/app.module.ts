import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebareComponent } from './shared/sidebare/sidebare.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AddInformationComponent } from './features/add-information/add-information.component';
import { ListInformationComponent } from './features/list-information/list-information.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebareComponent,
    NavbarComponent,
    AddInformationComponent,
    ListInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
