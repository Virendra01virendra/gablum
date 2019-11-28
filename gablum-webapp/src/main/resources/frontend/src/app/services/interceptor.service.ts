import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private auth: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      // tap(response => {
      //   if (response instanceof HttpResponse) {
      //     console.log('tap');
      //     if (response.url.match('*/token/valid/*')) {
      //       if (response.status === 200) {
      //         this.auth.setAuthenticated(true);
      //       } else {
      //         this.auth.setAuthenticated(false);
      //       }
      //     }
      //   }
      // }),
      catchError(err => {
        if (err instanceof HttpErrorResponse) {
          if (err.url.match('*/token/valid/*')) {
            this.auth.setAuthenticated(false);
          }
        }
        return of(err);
        }
      )
    );
  }
}
