import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiResponse} from '../model/api.response';
import {Person} from '../model/person.model';
import {environment} from 'src/environments/environment';

@Injectable()
export class PersonService {

  constructor(private http: HttpClient) {
  }

  baseUrl: string = environment.baseUrl + '/api/persons';


  getPersons(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getEmployeeById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/find/' + id);
  }

  createPerson(person: Person): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + '/create', person);
  }

  updateEmployee(employee: Person): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + '/update', employee);
  }

  deleteEmployee(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + '/delete/' + id);
  }
}
