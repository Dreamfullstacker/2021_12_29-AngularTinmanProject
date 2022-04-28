/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class GeoLocation {
  fields: ThinqFormFieldUI[] = [
    {
      fieldName: 'Status',
      startCol: 1,
      endCol: 4
    },
    {
      fieldName: 'RelatedId',
      startCol: 10,
      endCol: 13
    },
    {
      fieldName: 'Description'
    },
    {
      fieldName: 'Latitude'
    },
    {
      fieldName: 'Longitude'
    },
    {
      fieldName: 'Altitude'
    },
    {
      fieldName: 'AltitudeAccuracy'
    },
    {
      fieldName: 'Accuracy',
      startCol: 1,
      endCol: 13
    },
    {
      fieldName: 'Heading',
      startCol: 1,
      endCol: 13
    },
    {
      fieldName: 'Tag',
      startCol: 1,
      endCol: 13
    },
  ];
  constructor() {
  }
}
