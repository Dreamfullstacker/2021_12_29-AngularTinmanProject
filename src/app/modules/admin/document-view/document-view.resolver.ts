import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { ThinqResponse } from 'app/core/thinq/thinq.type';
import { Observable, of } from 'rxjs';
import { ThinqService } from '../thinq/thinq.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentViewResolver implements Resolve<ThinqResponse> {
  constructor(private _thinqService: ThinqService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ThinqResponse> {
    const appId = route.params['appId'];
    return this._thinqService.getData(appId);
  }
}
