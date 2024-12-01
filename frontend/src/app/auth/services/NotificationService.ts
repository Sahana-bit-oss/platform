import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
    providedIn: 'root',
  })
  export class NotificationService {
    private apiUrl = 'http://localhost:8080/api/notifications';
  
    constructor(private http: HttpClient) {}
  
    sendNotification(email: string, message: string): Observable<any> {
      return this.http.post(this.apiUrl + '/send', { email, message });
    }
  }
  