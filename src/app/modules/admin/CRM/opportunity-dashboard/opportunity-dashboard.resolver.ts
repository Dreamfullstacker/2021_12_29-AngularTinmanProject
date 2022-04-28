import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { ApiV1GetDataResponse } from 'app/core/admin-view/admin-view.type';
import { UserService } from 'app/core/user/user.service';
import { Observable, of } from 'rxjs';
import { OpportunityDashboardService } from './opportunity-dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class OpportunityDashboardResolver implements Resolve<ApiV1GetDataResponse> {
  constructor(
    private _opportunityService: OpportunityDashboardService,
    private _userService: UserService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ApiV1GetDataResponse> {
    const year = new Date().getFullYear();
    const partyId = this._userService.user.partyId.toString();
    return this._opportunityService.getData(
      partyId,
      year + '-01-01',
      year + '-12-31',
    );
  }
}
