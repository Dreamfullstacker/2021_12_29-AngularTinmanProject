import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CreateThinqService } from './create-thinq.service';

@Injectable({
  providedIn: 'root'
})
export class CreateThinqResolver implements Resolve<any> {
  constructor(private _createService: CreateThinqService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const appId = route.params['appId'];
    return this._createService.getCabinets(appId);
  }
}
