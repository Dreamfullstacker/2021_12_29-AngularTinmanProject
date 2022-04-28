/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class Campaign {
  fields: ThinqFormFieldUI[] = [
    {
      fieldName: 'Type',
      startCol: 1,
      endCol: 4
    },
    {
      fieldName: 'Status',
      startCol: 4,
      endCol: 7
    },
    {
      fieldName: 'ExecutionStatus',
      startCol: 7,
      endCol: 10
    },
    {
      fieldName: 'ExecutionStatusDate',
      startCol: 10,
      endCol: 13
    },
    {
      fieldName: 'AssignedTo',
      startCol: 1,
      endCol: 4
    },
    {
      fieldName: 'EmailSent',
      startCol: 10,
      endCol: 13
    },
    {
      fieldName: 'CampaignName',
      startCol: 1,
      endCol: 9
    },
    {
      fieldName: 'Description',
    },
    {
      fieldName: 'SendOnDate',
      startCol: 1,
      endCol: 4
    },
    {
      fieldName: 'SendOnTime',
      startCol: 4,
      endCol: 7
    },
    {
      fieldName: 'CampaignEmailSubject',
      startCol: 1,
      endCol: 13
    },
    {
      fieldName: 'CampaignEmailBody'
    },
    {
      fieldName: 'CampaignSmsBody'
    },
    {
      fieldName: 'Groups',
      startCol: 1,
      endCol: 13
    },
    {
      fieldName: 'SendToAll',
      startCol: 1,
      endCol: 13
    },

  ];
  constructor() {
  }
}
