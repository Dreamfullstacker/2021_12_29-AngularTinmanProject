/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class Party_Person {
  fields: ThinqFormFieldUI[] = [
    {
      fieldName: 'Status',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'Suffix',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'Name',
      startCol: 5,
      endCol: 9
    },
    {
      fieldName: 'LastName',
      startCol: 9,
      endCol: 13
    },
    {
      fieldName: 'MiddleName',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'MaidenNameMother',
      startCol: 5,
      endCol: 9
    },
    {
      fieldName: 'IdNo',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'PassportNo',
      startCol: 5,
      endCol: 9
    },
    {
      fieldName: 'PassportExpiryDate',
      startCol: 9,
      endCol: 13
    },
    {
      fieldName: 'Gender',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'Married',
      startCol: 5,
      endCol: 9
    },
    {
      fieldName: 'BirthDate',
      startCol: 9,
      endCol: 13
    },
    {
      fieldName: 'Description'
    },
    {
      fieldName: 'Description2'
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
