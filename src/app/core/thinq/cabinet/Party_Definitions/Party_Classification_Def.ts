/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class Party_Classification_Def {
  fields: ThinqFormFieldUI[] = [
    {
      fieldName: 'Status',
      startCol: 1,
      endCol: 4
    },
    {
      fieldName: 'Type',
      startCol: 4,
      endCol: 7
    },
    {
      fieldName: 'PartyType',
      startCol: 10,
      endCol: 13
    },
    {
      fieldName: 'PartyClassification',
      startCol: 1,
      endCol: 13
    },
    {
      fieldName: 'Description'
    },
    {
      fieldName: 'Tag',
      startCol: 1,
      endCol: 13
    }
  ];
  constructor() {
  }
}
