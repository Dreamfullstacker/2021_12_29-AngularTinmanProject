/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class Survey_Question {
  fields: ThinqFormFieldUI[] = [
    {
      fieldName: 'Status',
      startCol: 1,
      endCol: 4,
    },
    {
      fieldName: 'AssignedTo',
      startCol: 4,
      endCol: 7,
    },
    {
      fieldName: 'Survey',
      startCol: 7,
      endCol: 10
    },
    {
      fieldName: 'SortOrder',
      startCol: 10,
      endCol: 13,
    },
    {
      fieldName: 'QuestionTitle',
      startCol: 1,
      endCol: 13
    },
    {
      fieldName: 'Question'
    },
    {
      fieldName: 'QuestionType',
      startCol: 1,
      endCol: 4,
    },
    {
      fieldName: 'EnableComment',
      startCol: 4,
      endCol: 7,
    },
    {
      fieldName: 'QuestionOptions'
    }
  ];
  constructor() {
  }
}
