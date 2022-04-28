/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class Repeater {
  fields: ThinqFormFieldUI[] = [
    {
      fieldName: 'RepeaterType',
      startCol: 1,
      endCol: 4
    },
    {
      fieldName: 'TargetClass',
      startCol: 7,
      endCol: 10
    },
    {
      fieldName: 'TargetId',
      startCol: 10,
      endCol: 13
    },
    {
      fieldName: 'FromDate',
      startCol: 1,
      endCol: 4
    },
    {
      fieldName: 'FromTime',
      startCol: 4,
      endCol: 7
    },
    {
      fieldName: 'ToDate',
      startCol: 7,
      endCol: 10
    },
    {
      fieldName: 'ToTime',
      startCol: 10,
      endCol: 13
    },
    {
      fieldName: 'RepeatPattern',
      startCol: 1,
      endCol: 4
    },
    {
      fieldName: 'RepeatFrequency',
      startCol: 4,
      endCol: 7
    },
    {
      fieldName: 'DayOfWeek',
      startCol: 7,
      endCol: 10
    },
    {
      fieldName: 'Notes'
    }
  ];
  constructor() {
  }
}
