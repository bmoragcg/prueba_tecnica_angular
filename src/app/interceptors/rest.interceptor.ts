import { HttpContextToken, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/operators';
import { Observable, map, throwError } from 'rxjs';


declare const alertify: any;

// export const API_TYPE = new HttpContextToken(() => false);
export const API_TYPE = new HttpContextToken(() => "control");

@Injectable({ providedIn: 'root' })
export class RestInterceptor implements HttpInterceptor {

    constructor() {

    }

    intercept = (req: HttpRequest<any>, next: HttpHandler): Observable<any> => {

        const request = this.addToken(req);

        console.log(request);

        return next.handle(request).pipe(
            map(event => { return event; }),

            catchError(this.catchErrorFn)
        );
    }

    addToken(req: HttpRequest<any>) {
        if (req.context.get(API_TYPE) === undefined) {
            return req;
        }

        const request = req.clone({
            headers: req.headers.set("Authorization", `Bearer ${localStorage.getItem("token")!}`)
        });

        return request;
    }

    catchErrorFn = (err: any) => {
        if (err.status === 401) {
            alertify.error('Su tiempo en sesión ha finalizado');
        }
        return err;
    }

}
