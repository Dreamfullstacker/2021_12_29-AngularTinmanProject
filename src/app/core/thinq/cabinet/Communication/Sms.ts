/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class Sms {
  fields: ThinqFormFieldUI[] = [
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
      fieldName: 'Subject',
      startCol: 1,
      endCol: 13
    },
    {
      fieldName: 'SentDate',
      startCol: 1,
      endCol: 13
    },
    {
      fieldName: 'Response'
    },
  ];
  constructor() {
  }
}
