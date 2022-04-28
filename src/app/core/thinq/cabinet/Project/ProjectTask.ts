/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class ProjectTask {
  fields: ThinqFormFieldUI[] = [
    {
      fieldName: 'Nature',
      startCol: 1,
      endCol: 4
    },
    {
      fieldName: 'Epic',
      startCol: 4,
      endCol: 7
    },
    {
      fieldName: 'Project',
      startCol: 7,
      endCol: 13
    },
    {
      fieldName: 'ParentTaskName'
    },
    {
      fieldName: 'Sequence'
    },
    {
      fieldName: 'PartyRole'
    },
    {
      fieldName: 'Organisation',
      startCol: 1,
      endCol: 7
    },
    {
      fieldName: 'Contact'
    },
    {
      fieldName: 'Job'
    },
    {
      fieldName: 'Candidate'
    },
    {
      fieldName: 'Description'
    },
    {
      fieldName: 'Status',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'Type',
      startCol: 5,
      endCol: 9
    },
    {
      fieldName: 'AssignedTo',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'OwnerId',
      startCol: 5,
      endCol: 9
    },
    {
      fieldName: 'ExpectedStart',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'ExpectedEnd',
      startCol: 5,
      endCol: 9
    },
    {
      fieldName: 'DueDate',
      startCol: 9,
      endCol: 13
    },
    {
      fieldName: 'StartDate',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'EndDate',
      startCol: 5,
      endCol: 9
    },
    {
      fieldName: 'DeferDate',
      startCol: 9,
      endCol: 13
    },
    {
      fieldName: 'Description2'
    }
  ];
  constructor() {
  }
}
