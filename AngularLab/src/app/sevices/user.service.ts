import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from '../entity/Product';
import {User} from '../entity/User';
import {Cafe} from "../entity/Cafe";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:8070/api/user';
  private urlName = 'http://localhost:8070/api/userName';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    debugger;
    return this.httpClient.get<User[]>(`${this.url}`);
  }
  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.url}`, user);
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.url}`, user);
  }
  // tslint:disable-next-line:typedef
  deleteUser(id: number): Observable<any> {
    debugger;
    return this.httpClient.delete(`${this.url}/${id}`, {responseType: 'text' as 'json'});
  }

  getUser(name: string): Observable<User> {
    debugger;
    return this.httpClient.get<User>(`${this.urlName}/${name}`, {responseType: 'text' as 'json'});
  }
}
