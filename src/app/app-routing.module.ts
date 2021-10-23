import { MedicoFormComponent } from './medico/medico-form/medico-form.component';
import { MedicoOneComponent } from './medico/medico-one/medico-one.component';
import { MedicoListComponent } from './medico/medico-list/medico-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'medicos', pathMatch: 'full'},
  {path: 'medicos', component: MedicoListComponent},
  {path: 'medicos/:id', component: MedicoOneComponent},
  {path: 'medicos/form', component: MedicoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
