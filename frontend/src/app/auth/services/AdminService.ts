import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
    providedIn: 'root',
  })
  export class AdminService {
    private apiUrl = 'http://localhost:8080/api/admin';
  
    constructor(private http: HttpClient) {}
  
    getUsers(): Observable<any> {
      return this.http.get(`${this.apiUrl}/users`);
    }
  
    getCourses(): Observable<any> {
      return this.http.get(`${this.apiUrl}/courses`);
    }
  
    deleteUser(id: number): Observable<any> {
      return this.http.delete(`${this.apiUrl}/users/${id}`);
    }
  
    deleteCourse(id: number): Observable<any> {
      return this.http.delete(`${this.apiUrl}/courses/${id}`);
    }
  }
  