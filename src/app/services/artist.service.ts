import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

import { Observable } from 'rxjs';
import { Artist } from '../models/artist.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  getAll(route: string): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.createCompleteRoute(route, environment.apiUrl));
  }

  get(route: string,id: any): Observable<Artist> {
    return this.http.get<Artist>(this.createCompleteRoute(route, environment.apiUrl)+`/${id}`);
  }

  create(route:string, data: any): Observable<any> {
    return this.http.post(this.createCompleteRoute(route, environment.apiUrl), data);
  }

  update(route:string, id: any, data: any): Observable<any> {
    return this.http.put(this.createCompleteRoute(route, environment.apiUrl)+`/${id}`, data);
  }

  delete(route:string, id: any): Observable<any> {
    return this.http.delete(this.createCompleteRoute(route, environment.apiUrl)+`/${id}`);
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }
}
