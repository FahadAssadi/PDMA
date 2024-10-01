import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from '../models/models';
import { Package } from '../models/models';

const API_URL = 'http://localhost:8080/api/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private http:HttpClient) { }

  // Driver CRUD operations
  createDriver(data: Driver): Observable<Driver> {
    return this.http.post<Driver>(API_URL + 'driver', data, httpOptions);
  }

  getDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(API_URL + 'driver', httpOptions);
  }

  deleteDriver(id: string): Observable<void> {
    return this.http.delete<void>(API_URL + 'driver/' + id, httpOptions);
  }

  updateDriver(id: string, data: Driver): Observable<Driver> {
    return this.http.put<Driver>(API_URL + 'driver/' + id, data, httpOptions);
  }

  // Package CRUD operations
  createPackage(data: Package): Observable<Package> {
    return this.http.post<Package>(API_URL + 'package', data, httpOptions);
  }

  getPackages(): Observable<Package[]> {
    return this.http.get<Package[]>(API_URL + 'package', httpOptions);
  }

  deletePackage(id: string): Observable<void> {
    return this.http.delete<void>(API_URL + 'package/' + id, httpOptions);
  }

  updatePackage(id: string, data: Package): Observable<Package> {
    return this.http.put<Package>(API_URL + 'package/' + id, data, httpOptions);
  }
}
