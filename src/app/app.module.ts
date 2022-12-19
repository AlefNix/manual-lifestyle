import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { CriarFichaComponent } from './criar-ficha/criar-ficha.component';
import { AdicionarExercicioComponent } from './adicionar-exercicio/adicionar-exercicio.component';
import { EnviarFichaComponent } from './enviar-ficha/enviar-ficha.component';

import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PrimeirosPassosComponent } from './primeiros-passos/primeiros-passos.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarFichaComponent,
    AdicionarExercicioComponent,
    EnviarFichaComponent,
    InicioComponent,
    PrimeirosPassosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      {path: 'enviar-ficha', component: EnviarFichaComponent},
      {path: 'criar-ficha', component: CriarFichaComponent},
      {path: 'adicionar-exercicio', component: AdicionarExercicioComponent},
      {path: 'primeiros-passos', component: PrimeirosPassosComponent},
      {path: 'inicio', component: InicioComponent},
      {path: '', redirectTo: '/inicio', pathMatch: 'full'},
      {path: '**', component: InicioComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
