/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class Organisation {
  fields: ThinqFormFieldUI[] = [
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
      fieldName: 'CompanyName',
      startCol: 1,
      endCol: 9
    },
    {
      fieldName: 'Fees',
      startCol: 9,
      endCol: 11
    },
    {
      fieldName: 'FeesProposed',
      startCol: 11,
      endCol: 13
    },
    {
      fieldName: 'Telephone'
    },
    {
      fieldName: 'Email'
    },
    {
      fieldName: 'Website',
    },
    {
      fieldName: 'Country',
    },
    {
      fieldName: 'Description',
    },
    {
      fieldName: 'Note',
    },
    {
      fieldName: 'PrimaryAddress',
    },
    {
      fieldName: 'Tag',
    },
    {
      fieldName: 'Reference',
    }
  ];
  constructor() {
  }
}
