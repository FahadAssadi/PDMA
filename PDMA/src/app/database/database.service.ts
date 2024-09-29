import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  createDriver(data: any) {
    return this.http.post(API_URL + 'driver', data, httpOptions);
  }

  getDrivers() {
    return this.http.get(API_URL + 'driver', httpOptions);
  }

  deleteDriver(id: any) {
    return this.http.delete(API_URL + 'driver/' + id, httpOptions);
  }

  updateDriver(id: any, data: any) {
    return this.http.put(API_URL + 'driver/' + id, data, httpOptions);
  }

  createPackage(data: any) {
    return this.http.post(API_URL + 'package', data, httpOptions);
  }

  getPackages() {
    return this.http.get(API_URL + 'package', httpOptions);
  }

  deletePackage(id: any) {
    return this.http.delete(API_URL + 'package/' + id, httpOptions);
  }

  updatePackage(id: any, data: any) {
    return this.http.put(API_URL + 'package/' + id, data, httpOptions);
  }
}
