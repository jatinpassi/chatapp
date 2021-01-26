import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(val: { email: string; password: string }) {
    return this.http
      .post(`${environment.host}/users/login`, val)
      .pipe(shareReplay(1));
  }
  register(val: {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
  }) {
    return this.http
      .post(`${environment.host}/users/register`, val)
      .pipe(shareReplay(1));
  }
}
