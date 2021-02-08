import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { ContactusByuser } from '../_models/contactusbyuser';
import { map } from 'rxjs/operators';
import { RequestOrderSuccessDetailsHistory } from '../_services/requestOrderSuccessDetails';


@Injectable({
  providedIn: 'root'
})
export class MedicalserviceService {


  private baseUrl = 'http://localhost:57263/gobox-rest/api/medical';

  constructor(private http: HttpClient,
    private requestOrderSuccessDEtailsHistory: RequestOrderSuccessDetailsHistory
    ) { }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  //Users Methods

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUser(userregister: User): Observable<Object> {
    return this.http.post(`${this.baseUrl}/createUser`, userregister);
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  contactusByuser(contactusbyuser: ContactusByuser): Observable<Object> {
    return this.http.post(`${this.baseUrl}/contactFormByUser`, contactusbyuser);
  }

makeRequestFormSubmit(Object: any): Observable<Object>{

  return this.http.post(`${this.baseUrl}/userMakeRequestServiceSave`, Object);
}

getRequestHistoryDetailsList(emailId: string): Observable<any> {
  return this.http.get(`${this.baseUrl}/userRequestHistoryDetailsGet/${emailId}`);
}




}