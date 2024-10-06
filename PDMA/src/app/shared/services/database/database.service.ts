import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import type { Driver } from '../../../models/models';
import type { DriverUpdateDetails } from '../../../models/models';
import type { Package } from '../../../models/models';
import type { PackageUpdateDetails } from '../../../models/models';
import type { Statistics } from '../../../models/models';

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

  updateDriver(data: DriverUpdateDetails): Observable<Driver> {
    return this.http.put<Driver>(API_URL + 'driver/' + data.driverId, data, httpOptions);
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

  updatePackage(data: PackageUpdateDetails): Observable<Package> {
    return this.http.put<Package>(API_URL + 'package/' + data.packageId, data, httpOptions);
  }

  // Statistics operations
  getStatistics(): Observable<Statistics> {
    return this.http.get<Statistics>(API_URL + 'stats', httpOptions);
  }

  resetStatistics(): Observable<void> {
    return this.http.delete<void>(API_URL + 'stats', httpOptions);
  }
}
