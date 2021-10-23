import { MedicoFormComponent } from './medico/medico-form/medico-form.component';
import { MedicoOneComponent } from './medico/medico-one/medico-one.component';
import { MedicoListComponent } from './medico/medico-list/medico-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'medicos/medico-list', component: MedicoListComponent},
  {path: 'medicos/medico-one', component: MedicoOneComponent},
  {path: 'medicos/medico-form', component: MedicoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
