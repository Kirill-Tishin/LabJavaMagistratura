import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Employee} from '../entity/Employee';
import {HttpClient} from '@angular/common/http';
import {Cafe} from '../entity/Cafe';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = 'http://localhost:8070/api/employee';

  constructor(private httpClient: HttpClient) {
  }

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.url}`);
  }

  getEmployeesForCafe(cafe: Cafe): Observable<Employee> {
    debugger;
    return this.httpClient.get<Employee>(`${this.url}/${cafe}`);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.url}`, employee);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${this.url}`, employee);
  }

  // tslint:disable-next-line:typedef
  deleteService(id: number): Observable<any> {
    debugger;
    return this.httpClient.delete(`${this.url}/${id}`, {responseType: 'text' as 'json'});
  }
}
