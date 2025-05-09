import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  signUpUrl= "http://localhost:3000/signup";

  onSignUp(data: any): Observable<any>{
   return this.http.post<any>(this.signUpUrl, data);
  }
}
