import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolsComponent } from './tools/tools.component';
import { HeaderComponent } from './header/header.component';
import { BoxComponent } from './box/box.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolsComponent,
    HeaderComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
