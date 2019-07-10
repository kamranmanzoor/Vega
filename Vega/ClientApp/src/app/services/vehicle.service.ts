import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }
  
  getMakes() {
    return this.http.get('/api/makes');
    //return this.http.get('/api/makes').pipe(map(res => {
    //  res
    //}));
  }

  getFeatures() {
    return this.http.get('/api/features');
  }

}
