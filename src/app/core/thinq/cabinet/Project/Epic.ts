/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class Epic {
  fields: ThinqFormFieldUI[] = [
    {
      fieldName: 'Status',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'Value',
      startCol: 5,
      endCol: 9
    },
    {
      fieldName: 'AssignedTo',
      startCol: 9,
      endCol: 13
    },
    {
      fieldName: 'Description'
    },
    {
      fieldName: 'ExpectedStart'
    },
    {
      fieldName: 'ExpectedEnd'
    },
    {
      fieldName: 'StartDate'
    },
    {
      fieldName: 'EndDate'
    }
  ];
  constructor() {
  }
}
