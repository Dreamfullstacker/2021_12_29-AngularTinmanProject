/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class WebPostAdo {
  fields: ThinqFormFieldUI[] = [
    {
      fieldName: 'Status',
      startCol: 1,
      endCol: 13
    },
    {
      fieldName: 'AssignedTo',
      startCol: 1,
      endCol: 13
    },
    {
      fieldName: 'Title',
      startCol: 1,
      endCol: 9
    },
    {
      fieldName: 'Tags',
      startCol: 9,
      endCol: 13
    },
    {
      fieldName: 'Category',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'Sector',
      startCol: 5,
      endCol: 9
    },
    {
      fieldName: 'Country',
      startCol: 9,
      endCol: 13
    },
    {
      fieldName: 'SEODescription'
    },
    {
      fieldName: 'SEOKeywords',
      startCol: 1,
      endCol: 13
    },
    {
      fieldName: 'Description'
    },
    {
      fieldName: 'ImageUploadedId',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'ThumbnailId',
      startCol: 5,
      endCol: 9
    },
    {
      fieldName: 'OpenDate',
      startCol: 9,
      endCol: 13
    },
  ];
  constructor() {
  }
}
