import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../model/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private getUrl:string;
  private postUrl:string;
  constructor(private http:HttpClient) { 
    this.getUrl = "http://localhost:9090/customer/all";
    this.postUrl = "http://localhost:9090/customer/add";
  }
  
  public findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.getUrl);
  }

  public save(customer: Customer) {
    return this.http.post<Customer>(this.postUrl, customer);
  }

}
