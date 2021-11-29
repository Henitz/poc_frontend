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

  getOne(id: number) {
    return this.http.get<Pacientes>(this.basePacienteUrl + `/${id}`)
  }

  save(pacientes: Pacientes) {
    return this.http.post<Pacientes>(this.basePacienteUrl, pacientes)
  }

  edit(id: number, pacientes: Pacientes) {
    return this.http.put(this.basePacienteUrl + `/${id}`, pacientes)
   }

  delete(id: number) : Observable<any> {
    return this.http.delete<any>(this.basePacienteUrl + `/${id}`)
  }

}
