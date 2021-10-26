import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicos } from './medicos';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  private baseMedicoUrl = environment.baseUrl + "/medicos";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Medicos[]> {
    return this.http.get<Medicos[]>(this.baseMedicoUrl)
  }

  getOne(id: number) {
    return this.http.get<Medicos>(this.baseMedicoUrl + `/${id}`)
  }

  save(medicos: Medicos) {
    return this.http.post<Medicos>(this.baseMedicoUrl, medicos)
  }

  delete(id: number) : Observable<any> {
    return this.http.delete<any>(this.baseMedicoUrl + `/${id}`)
  }

  update(id: number, medico: Medicos){
    return this.http.put(this.baseMedicoUrl + `/${id}`, medico)
  }
}
