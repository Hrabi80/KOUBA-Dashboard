import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { information } from '../models/information';
@Injectable({
  providedIn: 'root'
})
export class InformationService {

  private _url = "API-URL/ENDPOINT";
  constructor(private _http: HttpClient) { }

  // those are just showcase of methodes for HTTP requests ....
  addService(data:information):Observable<information>{
    return this._http.post<information>(this._url,data);
  }
}
