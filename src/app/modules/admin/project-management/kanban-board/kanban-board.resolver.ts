import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PMKanbanBoardService } from './kanban-board.service';

@Injectable({
  providedIn: 'root'
})
export class PMKanbanBoardResolver implements Resolve<any> {
  constructor(
    private _kanbanService: PMKanbanBoardService
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this._kanbanService.getTasks();
  }
}
