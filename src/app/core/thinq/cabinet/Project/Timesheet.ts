/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class Timesheet {
  fields: ThinqFormFieldUI[] = [
    {
      fieldName: 'Description'
    },
    {
      fieldName: 'Activity',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'AssignedTo',
      startCol: 5,
      endCol: 9
    },
    {
      fieldName: 'ParentTaskName',
      startCol: 9,
      endCol: 13
    },
    {
      fieldName: 'StartDate',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'StartTime',
      startCol: 5,
      endCol: 9
    },
    {
      fieldName: 'DurationTimeHours',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'DurationTime',
      startCol: 5,
      endCol: 9
    },
    {
      fieldName: 'Duration',
      startCol: 9,
      endCol: 13
    },
    {
      fieldName: 'BillingCode',
    },
    {
      fieldName: 'Status',
    }
  ];
  constructor() {
  }
}
