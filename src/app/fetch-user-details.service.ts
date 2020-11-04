import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchUserDetailsService {

  constructor(public http:HttpClient) { }

  getUserDetails():Observable<any>{
    return this.http.get(`https://reqres.in/api/users?delay=3`);
  }

  getUserProfileDetails(id):Observable<any>{
    return this.http.get(`https://reqres.in/api/users/`+id);
  }
}
