/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class Party_Relationship {
  fields: ThinqFormFieldUI[] = [
    {
      fieldName: 'Status',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'DateFrom',
      startCol: 5,
      endCol: 9
    },
    {
      fieldName: 'DateTo',
      startCol: 9,
      endCol: 13
    },
    {
      fieldName: 'PartyRelDef',
      startCol: 1,
      endCol: 10
    },
    {
      fieldName: 'PartyRelType',
      startCol: 10,
      endCol: 13
    },
    {
      fieldName: 'PartyRoleFrom'
    },
    {
      fieldName: 'PartyRoleTo'
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
