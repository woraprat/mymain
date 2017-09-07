import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { RightbarComponent } from './rightbar/rightbar.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftbarComponent,
    RightbarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
