/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class Group {
  fields: ThinqFormFieldUI[] = [
    {
      fieldName: 'Status',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'GroupType',
      startCol: 5,
      endCol: 9
    },
    {
      fieldName: 'AssignedTo',
      startCol: 9,
      endCol: 13
    },
    {
      fieldName: 'GroupName',
      startCol: 1,
      endCol: 13
    },
    {
      fieldName: 'Description'
    }
  ];
  constructor() {
  }
}
