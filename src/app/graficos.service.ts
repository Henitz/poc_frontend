import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Graficos } from './graficos';
import { Observable } from 'rxjs';
import { Medicos } from './medicos';

@Injectable({
  providedIn: 'root'
})
export class GraficosService {

  private baseGraficosUrl = environment.baseUrl + "/graficos/totais";

  constructor(private http: HttpClient) { }



  getTotais(): Observable<Graficos[]> {
    return this.http.get<Graficos[]>(this.baseGraficosUrl);
  }

 /*  getMedico(): Observable<Medicos>[]> {
    return this.http.get<Medicos[]>(this.baseMedicoUrl)
  } */
}

