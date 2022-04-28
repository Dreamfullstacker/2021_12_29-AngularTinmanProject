/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class Survey_Answer {
  fields: ThinqFormFieldUI[] = [
    {
      fieldName: 'Date',
      startCol: 1,
      endCol: 5,
    },
    {
      fieldName: 'Survey',
      startCol: 5,
      endCol: 9
    },
    {
      fieldName: 'Question',
      startCol: 9,
      endCol: 13
    },
    {
      fieldName: 'Candidate',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'Application',
      startCol: 5,
      endCol: 9
    },
    {
      fieldName: 'Answer'
    },
    {
      fieldName: 'Comment'
    }
  ];
  constructor() {
  }
}
