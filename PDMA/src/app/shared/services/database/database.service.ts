import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserDetails } from '../../models/UserDetails';
import { Statistics } from '../../models/Statistics';
import { Driver, DriverUpdateDetails } from '../../models/Driver';
import { Package, PackageUpdateDetails } from '../../models/Package';

const API_URL: string = 'http://localhost:8080/api/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private http:HttpClient) {}

  // -------------------- USER AUTHENTICATION OPERATIONS --------------------
  register(data: UserDetails): Observable<void> {
    return this.http.post<void>(API_URL + 'auth/register', data, httpOptions);
  }

  login(data: UserDetails): Observable<void> {
    return this.http.post<void>(API_URL + 'auth/login', data, httpOptions);
  }

  // -------------------- STATISTICS OPERATIONS --------------------
  getStatistics(): Observable<Statistics> {
    return this.http.get<Statistics>(API_URL + 'stats', httpOptions);
  }

  resetStatistics(): Observable<void> {
    return this.http.delete<void>(API_URL + 'stats', httpOptions);
  }

  // -------------------- DRIVER CRUD OPERATIONS --------------------
  createDriver(data: Driver): Observable<Driver> {
    return this.http.post<Driver>(API_URL + 'driver', data, httpOptions);
  }

  getDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(API_URL + 'driver', httpOptions);
  }

  deleteDriver(id: string): Observable<void> {
    return this.http.delete<void>(API_URL + 'driver/' + id, httpOptions);
  }

  updateDriver(data: DriverUpdateDetails): Observable<Driver> {
    return this.http.put<Driver>(API_URL + 'driver/' + data.driverId, data, httpOptions);
  }

  // -------------------- PACKAGE CRUD OPERATIONS --------------------
  createPackage(data: Package): Observable<Package> {
    return this.http.post<Package>(API_URL + 'package', data, httpOptions);
  }

  getPackages(): Observable<Package[]> {
    return this.http.get<Package[]>(API_URL + 'package', httpOptions);
  }

  deletePackage(id: string): Observable<void> {
    return this.http.delete<void>(API_URL + 'package/' + id, httpOptions);
  }

  updatePackage(data: PackageUpdateDetails): Observable<Package> {
    return this.http.put<Package>(API_URL + 'package/' + data.packageId, data, httpOptions);
  }

}
