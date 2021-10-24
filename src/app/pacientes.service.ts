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

  private basePacienteUrl = environment.baseUrl + "/pacientes";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pacientes[]> {
    return this.http.get<Pacientes[]>(this.basePacienteUrl)
  }

  getOne(id: number) {
    return this.http.get<Pacientes>(this.basePacienteUrl + `/${id}`)
  }

  save(pacientes: Pacientes) {
    return this.http.post<Pacientes>(this.basePacienteUrl, pacientes)
  }

  delete(id: number) : Observable<any> {
    return this.http.delete<any>(this.basePacienteUrl + `/${id}`)
  }

}
