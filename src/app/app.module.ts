import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaquinaDoceComponent } from './maquina-doce/maquina-doce.component';
import { HudComponent } from './hud/hud.component';

@NgModule({
  declarations: [
    AppComponent,
    MaquinaDoceComponent,
    HudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
