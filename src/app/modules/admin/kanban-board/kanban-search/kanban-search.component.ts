/* eslint-disable @typescript-eslint/naming-convention */
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ThinqFormField } from 'app/core/thinq/thinq.type';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-kanban-search',
  templateUrl: './kanban-search.component.html',
  encapsulation: ViewEncapsulation.None
})
export class KanbanSearchComponent implements OnInit, OnChanges {

  @Input() tasks: any[];
  @Output() searchEvent: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  searchForm: FormGroup;
  searchFields: ThinqFormField[] = [];
  optionArray: Record<string, any> = {};
  optionKeyValue: any[] = [
    { name: 'epicOptions', id: 'EpicId', value: 'Epic'},
    { name: 'projectOptions', id: 'projectid', value: 'projectname'},
    { name: 'subprojectOptions', id: 'ParentTask', value: 'ParentTaskName'},
    { name: 'natureOptions', id: 'Nature', value: 'Nature'},
    { name: 'typeOptions', id: 'Type', value: 'Type'},
    { name: 'assignedtoOptions', id: 'AssignedTo', value: 'AssignedToName'},
    { name: 'ownerOptions', id: 'OwnerId', value: 'Owner'},
  ];
  updateOptionKeyValue: any[] = [
    { name: 'projectOptions', id: 'projectid', value: 'projectname'},
    { name: 'subprojectOptions', id: 'ParentTask', value: 'ParentTaskName'},
  ];
  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    // Create the form
    this.searchForm = this._formBuilder.group({
      project: [''],
      nature: [''],
      subproject: [''],
      type: [''],
      epic: [''],
      assignedto: [''],
      owner: [''],
      datefrom: [''],
      dateto: [''],
      search: [''],
    });
    this.searchForm.valueChanges
    .pipe(
      debounceTime(300),
      map(() => {
        this.searchEvent.emit(this.searchForm);
      })
    ).subscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes.tasks.firstChange) {
      this.generateInitialOptions(changes.tasks.currentValue);
    } else {
      this.generateProjectOptions(changes.tasks.currentValue);
    }
  }

  generateInitialOptions(tasks: any): void {
    for (const task of tasks) {
      for (const option of this.optionKeyValue) {
        const optionKey = task[option.id];
        const optionValue = task[option.value];
        if (!Object.prototype.hasOwnProperty.call(this.optionArray, option.name)) {
          this.optionArray[option.name] = [{ value: '', label: 'All'}];
        }
        const optionExist = this.optionArray[option.name].findIndex(op => op.value === optionKey) !== -1;
        if ( !optionExist && optionKey) {
          this.optionArray[option.name].push({
            value: optionKey,
            label: optionValue
          });
        }
      }
    }
    this.searchFields = [];
    this.searchFields.push(
      {Type: 'dte', Label: 'datefrom'},
      {Type: 'dte', Label: 'dateto'},
      {Type: 'ddl', Label: 'epic', Options: this.optionArray['epicOptions']},
      {Type: 'ddl', Label: 'project', Options: this.optionArray['projectOptions']},
      {Type: 'ddl', Label: 'subproject', Options: this.optionArray['subprojectOptions']},
      {Type: 'ddl', Label: 'nature', Options: this.optionArray['natureOptions']},
      {Type: 'ddl', Label: 'type', Options: this.optionArray['typeOptions']},
      {Type: 'ddl', Label: 'assignedto', Options: this.optionArray['assignedtoOptions']},
      {Type: 'ddl', Label: 'owner', Options: this.optionArray['ownerOptions']},
      {Type: 'txt', Label: 'search'},
    );
  }

  generateProjectOptions(tasks: any): void {
    for (const option of this.updateOptionKeyValue) {
        this.optionArray[option.name] = [{ value: '', label: 'All'}];
    }
    for (const task of tasks) {
      for (const option of this.updateOptionKeyValue) {
        const optionKey = task[option.id];
        const optionValue = task[option.value];
        const optionExist = this.optionArray[option.name].findIndex(op => op.value === optionKey) !== -1;
        if ( !optionExist && optionKey ) {
          this.optionArray[option.name].push({
            value: optionKey,
            label: optionValue
          });
        }
      }
    }
    this.searchFields[3].Options = this.optionArray['projectOptions'];
    this.searchFields[4].Options = this.optionArray['subprojectOptions'];
  }
}
