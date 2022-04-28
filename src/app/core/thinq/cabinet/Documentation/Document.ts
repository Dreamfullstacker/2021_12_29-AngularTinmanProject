/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class Document {
  fields: ThinqFormFieldUI[] = [
    {
      fieldName: 'DmsPublic',
      startCol: 1,
      endCol: 13
    },
    {
      fieldName: 'DmsFileName',
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
