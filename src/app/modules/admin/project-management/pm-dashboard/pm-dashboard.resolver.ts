import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { KoneQTUtils } from 'app/core/koneqt.utils';
import { merge, Observable, of } from 'rxjs';
import { PMDashboardService } from './pm-dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class PMDashboardResolver implements Resolve<any> {
  constructor(
    private _pmDashboardService: PMDashboardService,
    private _kqUtils: KoneQTUtils
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const dteStartDate = new Date();
    dteStartDate.setDate(1);
    const dteEndDate = new Date();
    const strStartDate = this._kqUtils.convertToKoneqtDate(dteStartDate);
    const strEndDate = this._kqUtils.convertToKoneqtDate(dteEndDate);
    const groupBy = route.queryParams['g']??'';
    return merge(
      this._pmDashboardService.getPMData(
        strStartDate,
        strEndDate,
        'Summary',
        groupBy
      ),
      this._pmDashboardService.getPMData(
        strStartDate,
        strEndDate,
        'doCountTasks',
        groupBy
      ),
      this._pmDashboardService.getTeamPlayers()
    );
  }
}
