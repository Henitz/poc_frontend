import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Remedios } from './remedios';

@Injectable({
  providedIn: 'root'
})
export class RemediosService {

  private baseRemedioUrl = environment.baseUrl + "/remedios";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Remedios[]> {
    return this.http.get<Remedios[]>(this.baseRemedioUrl)
  }

  getOne(id: number) {
    return this.http.get<Remedios>(this.baseRemedioUrl + `/${id}`)
  }

  save(remedios: Remedios) {
    return this.http.post<Remedios>(this.baseRemedioUrl, remedios)
  }

  delete(id: number) : Observable<any> {
    return this.http.delete<any>(this.baseRemedioUrl + `/${id}`)
  }



}
