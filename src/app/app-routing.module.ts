import { ConsultaOneComponent } from './consulta/consulta-one/consulta-one.component';
import { ConsultaListComponent } from './consulta/consulta-list/consulta-list.component';

import { MedicoOneComponent } from './medico/medico-one/medico-one.component';
import { MedicoListComponent } from './medico/medico-list/medico-list.component';
import { PacienteFormComponent } from './paciente/paciente-form/paciente-form.component';
import { PacienteListComponent } from './paciente/paciente-list/paciente-list.component';
import { PacienteOneComponent } from './paciente/paciente-one/paciente-one.component';
import { RemedioOneComponent } from './remedio/remedio-one/remedio-one.component';
import { RemedioListComponent } from './remedio/remedio-list/remedio-list.component';
import { RemedioFormComponent } from './remedio/remedio-form/remedio-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicoFormComponent } from './medico/medico-form/medico-form.component';
import { ConsultaFormComponent } from './consulta/consulta-form/consulta-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path : 'home', component: HomeComponent },
  { path : '', component: HomeComponent },

  {path: 'medicos/form', component: MedicoFormComponent},
  {path: 'medicos', component: MedicoListComponent},
  {path: 'medicos/medico-list', component: MedicoListComponent},
  {path: 'medicos/medico-form/:id', component: MedicoFormComponent},
  {path: 'medicos/:id', component: MedicoOneComponent},


  {path: 'pacientes/form', component: PacienteFormComponent},
  {path: 'pacientes', component: PacienteListComponent},
  {path: 'pacientes/:id', component: PacienteOneComponent},

  {path: 'remedios/form', component: RemedioFormComponent},
  {path: 'remedios', component: RemedioListComponent},
  {path: 'remedios/:id', component: RemedioOneComponent},

  {path: 'consultas/form', component: ConsultaFormComponent},
  {path: 'consultas', component: ConsultaListComponent},
  {path: 'consultas/:id', component: ConsultaOneComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
