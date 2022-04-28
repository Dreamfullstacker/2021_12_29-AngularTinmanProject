/* eslint-disable @typescript-eslint/naming-convention */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FuseValidators } from '@fuse/validators';
import { ThinqFormField } from 'app/core/thinq/thinq.type';
import { groupBy } from 'lodash-es';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation  : ViewEncapsulation.None
})
export class AddTaskComponent implements OnInit {

  timesheetForm: FormGroup;
  openProjectField: ThinqFormField;
  tasksByProject: any;
  openTaskField: ThinqFormField;
  constructor(
    public matDialogRef: MatDialogRef<AddTaskComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: {openTasks: any[]},
    private _formBuilder: FormBuilder,
    private _changeDetectorRef: ChangeDetectorRef,
  ) { }

  /**
   * On init
   */
  ngOnInit(): void {
    // Create the form
    this.timesheetForm = this._formBuilder.group({
      openProject     : [''],
      openTask   : ['', [Validators.required]]
    });
    const projectOption = [];
    const taskOption = this.getTasksOption(this._data.openTasks);
    this.tasksByProject = groupBy(this._data.openTasks, 'ProjectId');
    for (const projectId in this.tasksByProject) {
      if (Object.prototype.hasOwnProperty.call(this.tasksByProject, projectId)) {
        const tasks = this.tasksByProject[projectId];
        projectOption.push({
          label: tasks[0].Project,
          value: tasks[0].ProjectId,
        });
      }
    }
    const projectField = this.timesheetForm.controls['openProject'];
    projectField.valueChanges.subscribe((projectId: number) => {
      if(projectId === null) {
        this.openTaskField = {
          Type: 'ddl',
          Label: 'Open Task assigned to you',
          Options: this.getTasksOption(this._data.openTasks)
        };
        this._changeDetectorRef.markForCheck();
      } else {
        const tasks = this.tasksByProject[projectId];
        if(tasks) {
          const taskOptions = tasks.map(ts => ({
            label: ts.Abstract,
            value: ts.AppDataId
          }));
          this.openTaskField = {Type: 'ddl', Label: 'Open Task assigned to you', Options: taskOptions};
          this._changeDetectorRef.markForCheck();
        }
      }
    });
    this.openProjectField = {Type: 'ddl', Label: 'Open Project assigned to you', Options: projectOption};
    this.openTaskField = {Type: 'ddl', Label: 'Open Task assigned to you', Options: taskOption};
  }
  /**
   * Create timesheet and close
   */
  createTimesheet(): void
  {
    if(this.timesheetForm.invalid) {
      return;
    }
    const openTask = this.timesheetForm.controls['openTask'].value;
    const task = this._data.openTasks.find(ts => ts.AppDataId === openTask);
    // Close the dialog
    this.matDialogRef.close({
      project: task.ProjectId,
      task: openTask
    });
  }

  /**
   * Discard the message
   */
  discard(): void
  {
    this.timesheetForm.reset({ openProject: '', openTask: '' });
    // Close the dialog
    this.matDialogRef.close(null);
  }

  getTasksOption(tasks: any[]): any[] {
    const taskOptions = tasks.map(ts => ({
      label: ts.Abstract,
      value: ts.AppDataId
    }));
    return taskOptions;
  }
}
