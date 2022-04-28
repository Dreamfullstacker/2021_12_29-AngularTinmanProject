/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class Party_Contact_Mechanism {
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
      fieldName: 'PartyType',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'PartyRole',
      startCol: 5,
      endCol: 13
    },
    {
      fieldName: 'ContactType',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'ContactPurpose',
      startCol: 5,
      endCol: 13
    },
    {
      fieldName: 'Continent',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'ContinentId',
      startCol: 5,
      endCol: 7
    },
    {
      fieldName: 'Country',
      startCol: 7,
      endCol: 11
    },
    {
      fieldName: 'CountryId',
      startCol: 11,
      endCol: 13
    },
    {
      fieldName: 'Province',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'ProvinceId',
      startCol: 5,
      endCol: 7
    },
    {
      fieldName: 'District',
      startCol: 7,
      endCol: 11
    },
    {
      fieldName: 'DistrictId',
      startCol: 11,
      endCol: 13
    },
    {
      fieldName: 'City',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'CityId',
      startCol: 5,
      endCol: 7
    },
    {
      fieldName: 'Suburb',
      startCol: 7,
      endCol: 11
    },
    {
      fieldName: 'SuburbId',
      startCol: 11,
      endCol: 13
    },
    {
      fieldName: 'Street'
    },
    {
      fieldName: 'PostCode'
    },
    {
      fieldName: 'GeoPin',
      startCol: 1,
      endCol: 13
    },
    {
      fieldName: 'Directions'
    },
    {
      fieldName: 'Description'
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
