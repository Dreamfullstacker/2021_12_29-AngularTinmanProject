import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { merge, Observable, of } from 'rxjs';
import { RelateThinqService } from './relate-thinq.service';

@Injectable({
  providedIn: 'root'
})
export class RelateThinqResolver implements Resolve<any> {
  constructor(private _relateThinqService: RelateThinqService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const appId = route.params['appId'];
    return merge(
      this._relateThinqService.getExistingRelations(appId),
      this._relateThinqService.getRelatedFirstLevel(appId),
      this._relateThinqService.getEnabledClassesString(),
      this._relateThinqService.getRelationshipOptions(appId),
    );
  }
}
