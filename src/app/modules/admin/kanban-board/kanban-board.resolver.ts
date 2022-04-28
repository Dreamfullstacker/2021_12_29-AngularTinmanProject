import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { KanbanBoardService } from './kanban-board.service';

@Injectable({
  providedIn: 'root'
})
export class KanbanBoardResolver implements Resolve<any> {
  constructor(
    private _kanbanService: KanbanBoardService
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const cabinet = route.params['cabinet'];
    const field = route.params['field'];
    return this._kanbanService.getData(cabinet, field);
  }
}
