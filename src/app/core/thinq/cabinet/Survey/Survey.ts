/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class Survey {
  fields: ThinqFormFieldUI[] = [
    {
      fieldName: 'Status',
      startCol: 1,
      endCol: 4,
    },
    {
      fieldName: 'DateFrom',
      startCol: 4,
      endCol: 7,
    },
    {
      fieldName: 'DateTo',
      startCol: 7,
      endCol: 10,
    },
    {
      fieldName: 'AssignedTo',
      startCol: 10,
      endCol: 13,
    },
    {
      fieldName: 'Published',
      startCol: 1,
      endCol: 4,
    },
    {
      fieldName: 'Required',
      startCol: 4,
      endCol: 7,
    },
    {
      fieldName: 'Job',
      startCol: 7,
      endCol: 13
    },
    {
      fieldName: 'Organisation'
    },
    {
      fieldName: 'Contact'
    },
    {
      fieldName: 'SurveyTitle',
      startCol: 1,
      endCol: 13,
    },
    {
      fieldName: 'Description'
    }
  ];
  constructor() {
  }
}
