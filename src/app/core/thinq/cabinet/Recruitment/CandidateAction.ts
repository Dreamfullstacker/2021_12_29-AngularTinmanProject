/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class CandidateAction {
  fields: ThinqFormFieldUI[] = [
    {
      fieldName: 'ActionStatus',
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
      fieldName: 'ApplicationId',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'Candidate',
      startCol: 5,
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
      fieldName: 'EndTime',
      startCol: 9,
      endCol: 13
    },
    {
      fieldName: 'Description'
    },
  ];
  constructor() {
  }
}
