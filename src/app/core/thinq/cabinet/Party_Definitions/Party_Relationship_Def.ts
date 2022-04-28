/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class Party_Relationship_Def {
  fields: ThinqFormFieldUI[] = [
    {
      fieldName: 'Status',
      startCol: 1,
      endCol: 4
    },
    {
      fieldName: 'Context',
      startCol: 4,
      endCol: 7
    },
    {
      fieldName: 'PartyRelationshipType',
      startCol: 7,
      endCol: 13
    },
    {
      fieldName: 'PartyRelName',
      startCol: 1,
      endCol: 13
    },
    {
      fieldName: 'PartyRoleDefFrom',
    },
    {
      fieldName: 'PartyRoleDefTo'
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
