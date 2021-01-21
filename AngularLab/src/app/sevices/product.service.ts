import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../entity/Order';
import {Product} from '../entity/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:8070/api/product';

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.url}`);
  }
  createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${this.url}`, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.url}`, product);
  }

  // tslint:disable-next-line:typedef
  deleteProduct(id: number): Observable<any> {
    debugger;
    return this.httpClient.delete(`${this.url}/${id}`, {responseType: 'text' as 'json'});
  }
}
