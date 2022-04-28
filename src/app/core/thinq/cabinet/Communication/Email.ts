/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class Email {
  fields: ThinqFormFieldUI[] = [
    {
      fieldName: 'Status',
    },
    {
      fieldName: 'SentDate',
    },
    {
      fieldName: 'From',
      startCol: 1,
      endCol: 13
    },
    {
      fieldName: 'To',
      startCol: 1,
      endCol: 13
    },
    {
      fieldName: 'Cc',
      startCol: 1,
      endCol: 13
    },
    {
      fieldName: 'Subject',
      startCol: 1,
      endCol: 13
    },
    {
      fieldName: 'Body'
    },
  ];
  constructor() {
  }
}
