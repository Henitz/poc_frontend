import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MedicoListComponent } from './medico/medico-list/medico-list.component';
import { MedicoOneComponent } from './medico/medico-one/medico-one.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RemedioFormComponent } from './remedio/remedio-form/remedio-form.component';
import { RemedioListComponent } from './remedio/remedio-list/remedio-list.component';
import { RemedioOneComponent } from './remedio/remedio-one/remedio-one.component';
import { PacienteFormComponent } from './paciente/paciente-form/paciente-form.component';
import { PacienteListComponent } from './paciente/paciente-list/paciente-list.component';
import { PacienteOneComponent } from './paciente/paciente-one/paciente-one.component';
import { ConsultaFormComponent } from './consulta/consulta-form/consulta-form.component';
import { ConsultaListComponent } from './consulta/consulta-list/consulta-list.component';
import { ConsultaOneComponent } from './consulta/consulta-one/consulta-one.component';
import { MedicoFormComponent } from './medico/medico-form/medico-form.component';




@NgModule({
  declarations: [
    AppComponent,
    MedicoListComponent,
    MedicoOneComponent,
    RemedioFormComponent,
    RemedioListComponent,
    RemedioOneComponent,
    PacienteFormComponent,
    PacienteListComponent,
    PacienteOneComponent,
    ConsultaFormComponent,
    ConsultaListComponent,
    ConsultaOneComponent,
    MedicoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
