/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class Project {
  fields: ThinqFormFieldUI[] = [
    {
      fieldName: 'Status',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'Important',
      startCol: 5,
      endCol: 7
    },
    {
      fieldName: 'Urgent',
      startCol: 7,
      endCol: 9
    },
    {
      fieldName: 'EntityName',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'AssignedTo',
      startCol: 5,
      endCol: 9
    },
    {
      fieldName: 'Sequence',
      startCol: 9,
      endCol: 13
    },
    {
      fieldName: 'Description'
    },
    {
      fieldName: 'StartDate'
    },
    {
      fieldName: 'EndDate'
    },
    {
      fieldName: 'ExpectedStart'
    },
    {
      fieldName: 'ExpectedEnd'
    }
  ];
  constructor() {
  }
}
