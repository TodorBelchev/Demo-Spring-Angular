import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private httpClient: HttpClient) { }

  sendFileInBody(formData: FormData): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/file', formData);
  }
}
