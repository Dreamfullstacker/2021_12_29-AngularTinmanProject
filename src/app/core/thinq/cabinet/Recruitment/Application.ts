/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class Application {
  fields: ThinqFormFieldUI[] = [
    {
      fieldName: 'ActionStatus',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'AssignedUserId',
      startCol: 5,
      endCol: 9
    },
    {
      fieldName: 'AdminId',
      startCol: 9,
      endCol: 13
    },
    {
      fieldName: 'CHURN',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'Job',
      startCol: 1,
      endCol: 7
    },
    {
      fieldName: 'Candidate'
    },
    {
      fieldName: 'Contact'
    },
    {
      fieldName: 'Organisation'
    },
    {
      fieldName: 'CvReceived',
      startCol: 1,
      endCol: 4,
    },
    {
      fieldName: 'ProfileQ',
      startCol: 4,
      endCol: 7,
    },
    {
      fieldName: 'Payslip',
      startCol: 7,
      endCol: 10,
    },
    {
      fieldName: 'Excel',
      startCol: 10,
      endCol: 13,
    },
    {
      fieldName: 'Certificates',
      startCol: 1,
      endCol: 4,
    },
    {
      fieldName: 'TsCs',
      startCol: 4,
      endCol: 7,
    },
    {
      fieldName: 'Reference',
      startCol: 7,
      endCol: 10,
    },
    {
      fieldName: 'Photo',
      startCol: 10,
      endCol: 13,
    },
    {
      fieldName: 'Description'
    },
    {
      fieldName: 'Submitted',
      startCol: 1,
      endCol: 4,
    },
    {
      fieldName: 'Offered',
      startCol: 4,
      endCol: 7,
    },
    {
      fieldName: 'Accepted',
      startCol: 7,
      endCol: 10,
    },
    {
      fieldName: 'StartDate',
      startCol: 10,
      endCol: 13,
    },
  ];
  constructor() {
  }
}
