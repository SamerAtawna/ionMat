import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RequestOptions } from 'http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MydataService {
  headers = new Headers();
  options: RequestOptions;
  constructor(private http: HttpClient) {
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('xxorigin', '*');
  }

  getUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/data').pipe(map(data => {
      return data;
    }));
  }
}
