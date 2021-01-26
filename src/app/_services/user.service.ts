import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';
import { config, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/employees';

  
    getEmployee(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/${id}`);
    }
  

    getAll() {
        return this.http.get<User[]>(`${this.baseUrl}/users`);
    }

    register(user: User) {
        return this.http.post(`${this.baseUrl}/users/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.baseUrl}/users/${id}`);
    }
}