/* eslint-disable @typescript-eslint/naming-convention */
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  AfterViewInit,
  ViewEncapsulation,
  Output,
  EventEmitter
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { cloneDeep } from 'lodash-es';
import { ThinqRelationPagination } from 'app/modules/admin/thinq/thinq.type';

@Component({
  selector: 'thinq-existing-relationships',
  templateUrl: './existing-relationships.component.html',
  styleUrls: ['./existing-relationships.component.scss'],
})
export class ExistingRelationshipsComponent implements AfterViewInit, OnChanges {

  @Input() existingRelations: any[];
  @Output() deleteRelationEvent: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild(MatPaginator) private _paginator: MatPaginator;
  @ViewChild(MatSort) private _sort: MatSort;

  relations: Array<any>;
  isLoading: boolean = false;
  pagination: ThinqRelationPagination;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const related = this.getRelation(0, 10, '');
    this.relations = related.relations;
    this.pagination = related.pagination;
  }

  ngAfterViewInit(): void {
    if ( this._sort && this._paginator ) {
      // Set the initial sort
      this._sort.sort({
        id          : '',
        start       : 'asc',
        disableClear: true
      });
      // Get products if sort or page changes
      merge(this._sort.sortChange, this._paginator.page).pipe(
        switchMap(() => {
          this.isLoading = true;
          const related = this.getRelation(
            this._paginator.pageIndex,
            this._paginator.pageSize,
            this._sort.active,
            this._sort.direction);
          this.relations = related.relations;
          this.pagination = related.pagination;
          return of(true);
        }),
        map(() => {
            this.isLoading = false;
        })
      ).subscribe();
    }
  }

  initPagination(): void {
    this.pagination.size = 10;
    this.pagination.page = 0;
  }

  getRelation(page: number = 0, size: number = 10, sort: string, order: 'asc' | 'desc' | '' = 'asc', search: string = ''):
    { pagination: ThinqRelationPagination; relations: any[] } {
    let relations: any[] | null = cloneDeep(this.existingRelations);
    if ( sort === 'Abstract' ) {
      relations.sort((a, b) => (a[sort] > b[sort]) ? 1 : ((b[sort] > a[sort]) ? -1 : 0));
      relations = order === 'asc' ? relations: relations.reverse();
    }

    // If search exists...
    if ( search ) {
      // Filter the products
      relations = relations.filter(relation => relation.Abstract && relation.Abstract.toLowerCase().includes(search.toLowerCase()));
    }

    // Paginate - Start
    const relationsLength = relations.length;

    // Calculate pagination details
    const begin = page * size;
    const end = Math.min((size * (page + 1)), relationsLength);
    const lastPage = Math.max(Math.ceil(relationsLength / size), 1);

    // Prepare the pagination object
    let pagination: ThinqRelationPagination;

    // If the requested page number is bigger than
    // the last possible page number, return null for
    // products but also send the last possible page so
    // the app can navigate to there
    if ( page > lastPage ) {
      relations = null;
      pagination = {
        length    : relationsLength,
        size      : size,
        page      : page,
        lastPage  : lastPage,
        startIndex: begin,
        endIndex  : end - 1
      };
    }
    else {
      // Paginate the results by size
      relations = relations.slice(begin, end);

      // Prepare the pagination mock-api
      pagination = {
          length    : relationsLength,
          size      : size,
          page      : page,
          lastPage  : lastPage,
          startIndex: begin,
          endIndex  : end - 1
      };
    }
    return {
      pagination: pagination,
      relations: relations
    };
  }

  deleteRelation(appDataId: number, relationId: number): void {
    this.deleteRelationEvent.emit({
      TargetId: appDataId,
      RelationshipId: relationId
    });
  }
}
