import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
    providedIn: 'root',
  })
  export class UserService {
    private apiUrl = 'http://localhost:8080/api/auth';
  
    constructor(private http: HttpClient) {}
  
    register(user: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/register`, user);
    }
  }
  