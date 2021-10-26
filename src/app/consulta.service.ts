import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Consultas } from './consultas';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private baseConsultaUrl = environment.baseUrl + "/consultas";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Consultas[]> {
    return this.http.get<Consultas[]>(this.baseConsultaUrl)
  }

  getOne(id: number) {
    return this.http.get<Consultas>(this.baseConsultaUrl + `/${id}`)
  }

  save(consultas: Consultas) {
    return this.http.post<Consultas>(this.baseConsultaUrl, consultas)
  }

  delete(id: number) : Observable<any> {
    return this.http.delete<any>(this.baseConsultaUrl + `/${id}`)
  }


}
