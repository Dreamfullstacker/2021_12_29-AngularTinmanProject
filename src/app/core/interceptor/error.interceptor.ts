import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'app/core/auth/auth.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private _authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((err) => {
      if (err.status === 401) {
        // TODO: update checking login url part.
        const url = request.url.slice(-11);
        if(url === 'doLogin.php') {
          return throwError(err.error);
        }
        this._authService.kqLoginClear();
        location.reload();
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
