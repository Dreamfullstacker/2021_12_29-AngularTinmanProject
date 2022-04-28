import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AdminViewService } from './admin-view.service';

@Injectable({
  providedIn: 'root'
})
export class AdminViewResolver implements Resolve<any> {
  constructor(private _adminViewService: AdminViewService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const cabinet = route.params['cabinet'];
    return this._adminViewService.getData(cabinet);
  }
}
