import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};
const apiLink = '../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class MydataService {
  headers = new Headers();
  constructor(private http: HttpClient) {
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('xxorigin', '*');
  }

  getUsers(): Observable<any> {
    return this.http.get(apiLink).pipe(
      map(data => {
        console.log(data);
        return data;
      })
    );
  }
  getUserByName(name: string): Observable<any> {
    return this.http.get(apiLink).pipe(
      map((d: Array<any>) => {
       return d.find(s => {
          return s.name.indexOf(name) > -1;
        });
      })
    );
  }
}
