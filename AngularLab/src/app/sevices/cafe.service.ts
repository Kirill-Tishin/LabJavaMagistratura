import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cafe} from '../entity/Cafe';

@Injectable({
  providedIn: 'root'
})
export class CafeService {
  private url = 'http://localhost:8070/api/cafe';

  constructor(private httpClient: HttpClient) {
  }

  getCafes(): Observable<any> {
    return this.httpClient.get(`${this.url}`);
  }

  createCafe(cafe: Cafe): Observable<Cafe> {
    return this.httpClient.post<Cafe>(`${this.url}`, cafe);
  }

  updateCafe(cafe: Cafe): Observable<Cafe> {
    return this.httpClient.put<Cafe>(`${this.url}`, cafe);
  }

  // tslint:disable-next-line:typedef
  deleteCafe(id: number): Observable<any> {
    debugger;
    return this.httpClient.delete(`${this.url}/${id}`, {responseType: 'text' as 'json'});
  }

}
