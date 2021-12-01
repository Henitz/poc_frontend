import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Consultas } from './consultas';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private baseConsultaUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAll(accountId: any): Observable<Consultas[]> {
    return this.http.get<Consultas[]>(this.baseConsultaUrl + `/consultas/${accountId}`);
  }

  getOne(id: number, accountId: any) {
    return this.http.get<Consultas>(this.baseConsultaUrl + `/consultas/${id}` + `/${accountId}`);
  }

  save(consultas: Consultas, accountId: any) {
    return this.http.post<Consultas>(this.baseConsultaUrl + `/consultas` +  `/${accountId}`, consultas);
  }

  delete(id: number, accountId: any) : Observable<any> {
    return this.http.delete<any>(this.baseConsultaUrl + `/consultas/${id}` + `/${accountId}`);
  }

  update(id: number, consultas: Consultas, accountId: any){
    return this.http.put(this.baseConsultaUrl + `/consultas/${id}` + `/${accountId}`, consultas)
  }
}
