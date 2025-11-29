import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users'; // Truy cập danh sách người dùng

  constructor(private http: HttpClient) {}

  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}`, user);
  }

  login(credentials: { username: string; password: string }): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}?username=${credentials.username}&password=${credentials.password}`);
  }
}
