import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HudComponent } from './hud/hud.component';
import { MaquinaDoceComponent } from './maquina-doce/maquina-doce.component';
import { GrupoComponent } from './grupo/grupo.component';
import { SobreComponent } from './sobre/sobre.component';
import { ElevadorComponent } from './elevador/elevador.component';
const routes: Routes = [
  {path: 'maquina-doce', component: MaquinaDoceComponent },
  {path: 'hud', component: HudComponent },
  {path: 'grupo', component: GrupoComponent },
  {path: 'sobre', component: SobreComponent },
  {path: 'elevador', component: ElevadorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
