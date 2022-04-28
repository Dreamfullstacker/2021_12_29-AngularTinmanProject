/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class Contact {
  fields: ThinqFormFieldUI[] = [
    {
      fieldName: 'OptOut',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'UserId',
      startCol: 5,
      endCol: 9
    },
    {
      fieldName: 'Status',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'Industry',
      startCol: 5,
      endCol: 9
    },
    {
      fieldName: 'AssignedTo',
      startCol: 9,
      endCol: 13
    },
    {
      fieldName: 'Salutation',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'FirstName',
      startCol: 5,
      endCol: 9
    },
    {
      fieldName: 'LastName',
      startCol: 9,
      endCol: 13
    },
    {
      fieldName: 'Organisation'
    },
    {
      fieldName: 'JobTitle',
    },
    {
      fieldName: 'Telephone',
    },
    {
      fieldName: 'Email',
    },
    {
      fieldName: 'CompanyName',
    },
    {
      fieldName: 'IdNo',
    },
    {
      fieldName: 'Description',
    },
    {
      fieldName: 'PrimaryAddress',
    },
    {
      fieldName: 'Tag',
    }

  ];
  constructor() {
  }
}
