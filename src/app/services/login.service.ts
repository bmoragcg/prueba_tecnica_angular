import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { API_TYPE } from '../interceptors/rest.interceptor';

// import { QueryService } from './query.service';

@Injectable({
    providedIn: 'root',
})
export class LoginService {

    #getHeaders = () => ({
        context: new HttpContext().set(API_TYPE, undefined)
    });

    constructor(private http: HttpClient) { }

    signIn(params: Record<string, any>): Observable<any> {
        return this.http.post<any>(`${environment.urlApi}/auth/login`, params, this.#getHeaders());
    }

    register(params: string): Observable<any> {
        return this.http.post<any>(`${environment.urlApi}/auth/register`, params, this.#getHeaders());
    }
}
