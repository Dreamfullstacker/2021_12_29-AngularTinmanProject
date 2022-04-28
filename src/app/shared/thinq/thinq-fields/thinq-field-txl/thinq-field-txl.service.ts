import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { environment } from 'environments/environment';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface SearchResult {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThinqFieldTxlService {

  private _apiUrl: string = environment.apiEndPoint;
  constructor(
    private _httpClient: HttpClient,
    private _authService: AuthService,
  ) { }

  getResult(lookup: any = null, query: string = null): Observable<SearchResult[]> {
    if(!query) {
      return of([]);
    }
    const formData: FormData = this._authService.getAuthenticationData();
    let params = new HttpParams();
    if (lookup) {
      for (const key in lookup) {
        if (Object.prototype.hasOwnProperty.call(lookup, key)) {
          if(key === 'id') {
            continue;
          }
          const value = lookup[key];
          if(value) {
            params = params.set(key, value);
          }
        }
      }
    }
    params = params.set('q', query);
    return this._httpClient.post<SearchResult[]>(this._apiUrl + '/api/coreapi/doApiV1Search.php',
      formData,
      {
        params: params
      });
  }
}
