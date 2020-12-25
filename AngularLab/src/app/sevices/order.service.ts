import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cafe} from '../entity/Cafe';
import {Order} from '../entity/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private url = 'http://localhost:8070/api/order';

  constructor(private httpClient: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`${this.url}`);
  }
  createOrder(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(`${this.url}`, order);
  }

  updateOrder(order: Order): Observable<Order> {
    return this.httpClient.put<Order>(`${this.url}`, order);
  }

  // tslint:disable-next-line:typedef
  deleteOrder(id: number): Observable<any> {
    debugger;
    return this.httpClient.delete(`${this.url}/${id}`, {responseType: 'text' as 'json'});
  }
}
