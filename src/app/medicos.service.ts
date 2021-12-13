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

  private baseMedicoUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAll(accountId: any): Observable<Medicos[]> {
    return this.http.get<Medicos[]>(this.baseMedicoUrl + `/medicos/${accountId}`);
  }

  getOne(id: number, accountId: any) {
    console.log("aqui");
    return this.http.get<Medicos>(this.baseMedicoUrl   + `/medicos/${id}` + `/${accountId}`);
  }

  save(medicos: Medicos, accountId: any) {
    return this.http.post<Medicos>(this.baseMedicoUrl + `/medicos` +  `/${accountId}`, medicos);
  }

  delete(id: number, accountId: any) : Observable<any> {
    return this.http.delete<any>(this.baseMedicoUrl + `/medicos/${id}` + `/${accountId}`);
  }

  update(id: number, medico: Medicos, accountId: any){
    return this.http.put(this.baseMedicoUrl + `/medicos/${id}` + `/${accountId}`, medico)
  }
}
