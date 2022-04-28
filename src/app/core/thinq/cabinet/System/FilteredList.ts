/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class FilteredList {
  fields: ThinqFormFieldUI[] = [
    {
      fieldName: 'ListName'
    },
    {
      fieldName: 'ClassName'
    },
    {
      fieldName: 'Fields',
      startCol: 1,
      endCol: 13
    },
    {
      fieldName: 'Filters'
    },
    {
      fieldName: 'FilterTypes'
    },
    {
      fieldName: 'SortOrders'
    }
  ];
  constructor() {
  }
}
