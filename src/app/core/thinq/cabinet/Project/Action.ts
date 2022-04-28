/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class Action {
  fields: ThinqFormFieldUI[] = [
    {
      fieldName: 'Status',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'ActionType',
      startCol: 5,
      endCol: 9
    },
    {
      fieldName: 'AssignedTo',
      startCol: 9,
      endCol: 13
    },
    {
      fieldName: 'Source',
      startCol: 1,
      endCol: 5
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
      fieldName: 'DurationTime',
      startCol: 9,
      endCol: 13
    },
    {
      fieldName: 'RelatedId',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'Duration',
      startCol: 9,
      endCol: 13
    },
    {
      fieldName: 'Description'
    }
  ];
  constructor() {
  }
}
