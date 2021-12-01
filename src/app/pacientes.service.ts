import { PacienteListComponent } from './paciente/paciente-list/paciente-list.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pacientes } from './pacientes';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private basePacienteUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAll(accountId: any): Observable<Pacientes[]> {
    return this.http.get<Pacientes[]>(this.basePacienteUrl + `/pacientes/${accountId}`)
  }

  getOne(id: number, accountId: any) {
    return this.http.get<Pacientes>(this.basePacienteUrl   + `/pacientes/${id}` + `/${accountId}`)
  }

  save(pacientes: Pacientes, accountId: any) {
    return this.http.post<Pacientes>(this.basePacienteUrl + `/pacientes` +  `/${accountId}`, pacientes)
  }

  edit(id: number, pacientes: Pacientes, accountId: any) {
    return this.http.put(this.basePacienteUrl +  `/pacientes/${id}` + `/${accountId}`, pacientes)
   }

  delete(id: number, accountId: any) : Observable<any> {
    return this.http.delete<any>(this.basePacienteUrl + `/pacientes/${id}` + `/${accountId}`)
  }

}
