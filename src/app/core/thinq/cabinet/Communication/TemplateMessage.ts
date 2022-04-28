/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class TemplateMessage {
  fields: ThinqFormFieldUI[] = [
    {
      fieldName: 'Status',
      startCol: 1,
      endCol: 4
    },
    {
      fieldName: 'TemplateType',
      startCol: 4,
      endCol: 7
    },
    {
      fieldName: 'Type',
      startCol: 7,
      endCol: 10
    },
    {
      fieldName: 'TemplateName',
      startCol: 1,
      endCol: 10
    },
    {
      fieldName: 'Description',
    },
    {
      fieldName: 'TemplateEmailSubject',
      startCol: 1,
      endCol: 13
    },
    {
      fieldName: 'TemplateEmailBody',
    },
    {
      fieldName: 'TemplateSmsBody',
    }
  ];
  constructor() {
  }
}
