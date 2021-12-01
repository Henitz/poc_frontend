import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Remedios } from './remedios';

@Injectable({
  providedIn: 'root'
})
export class RemediosService {

  private baseRemedioUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAll(accountId: any): Observable<Remedios[]> {
    return this.http.get<Remedios[]>(this.baseRemedioUrl + `/remedios/${accountId}`);
  }

  getOne(id: number, accountId: any) {
    return this.http.get<Remedios>(this.baseRemedioUrl + `/remedios/${id}` + `/${accountId}`);
  }

  save(remedios: Remedios, accountId: any) {
    return this.http.post<Remedios>(this.baseRemedioUrl + `/remedios` +  `/${accountId}`, remedios);
  }

  delete(id: number, accountId: any) : Observable<any> {
    return this.http.delete<any>(this.baseRemedioUrl + `/remedios/${id}` + `/${accountId}`)

  }
  update(id: number, remedio: Remedios, accountId: any){
    return this.http.put(this.baseRemedioUrl + `/remedios/${id}` + `/${accountId}`, remedio)
  }



}
