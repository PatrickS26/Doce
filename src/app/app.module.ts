import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MaquinaDoceComponent } from './maquina-doce/maquina-doce.component';
import { HudComponent } from './hud/hud.component';
import { GrupoComponent } from './grupo/grupo.component';
import { SobreComponent } from './sobre/sobre.component';
import { ModalComponent } from './modal/modal.component';
import { MaquinaService } from './Services/maquina.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ElevadorComponent } from './elevador/elevador.component';


@NgModule({
  declarations: [
    AppComponent,
    MaquinaDoceComponent,
    HudComponent,
    GrupoComponent,
    SobreComponent,
    ModalComponent,
    ElevadorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ModalModule.forRoot()
  ],
  providers: [ MaquinaService,  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
