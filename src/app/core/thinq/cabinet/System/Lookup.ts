/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class Lookup {
  fields: ThinqFormFieldUI[] = [
    {
      fieldName: 'Cabinet',
      startCol: 1,
      endCol: 13
    },
    {
      fieldName: 'Field',
      startCol: 1,
      endCol: 13
    },
    {
      fieldName: 'GroupValue',
      startCol: 1,
      endCol: 13
    },
    {
      fieldName: 'Value',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'DisplayValue',
      startCol: 5,
      endCol: 9
    },
    {
      fieldName: 'SortOrder',
      startCol: 9,
      endCol: 13
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
