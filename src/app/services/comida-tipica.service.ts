import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, throwError, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { API_TYPE } from '../interceptors/rest.interceptor';

@Injectable({
    providedIn: 'root',
})
export class ComidaTipicaService {

    #getHeaders = () => ({
        headers: new HttpHeaders({
            authorization: `Bearer ${window.localStorage.getItem('api_token')}`,
        }),
    });

    selectedCategory = new Subject<string>();
    selectedCategory2 = '';

    constructor(private http: HttpClient) { }

    dataInit(): Observable<any> {
        return this.http.get<any>(`${environment.urlApi}/comida-tipica/data-init`, this.#getHeaders());
    }

    getCategory(): Observable<any> {
        return this.http.get<any>(`${environment.urlApi}/comida-tipica/get-category`, this.#getHeaders());
    }

    getMealsByCategory(category: string): Observable<any> {
        return this.http.post<any>(`${environment.urlApi}/comida-tipica/get-meals-category`, { category: category }, this.#getHeaders());
    }

    getFoodByName(food: string): Observable<any> {
        return this.http.post<any>(`${environment.urlApi}/comida-tipica/get-meals`, { food: food }, this.#getHeaders());
        // this.selectedCategory.next();
    }

    saveTags(tag: string): Observable<any> {
        return this.http.post<any>(`${environment.urlApi}/comida-tipica/save-tags`, { tag: tag }, this.#getHeaders());
    }

    getTags(): Observable<any> {
        return this.http.get<any>(`${environment.urlApi}/comida-tipica/get-tags`, this.#getHeaders());
    }

}
