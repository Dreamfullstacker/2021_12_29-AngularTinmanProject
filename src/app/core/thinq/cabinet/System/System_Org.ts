/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class System_Org {
  fields: ThinqFormFieldUI[] = [
    {
      fieldName: 'Status',
      startCol: 1,
      endCol: 4
    },
    {
      fieldName: 'Type',
      startCol: 4,
      endCol: 7
    },
    {
      fieldName: 'Title',
      startCol: 1,
      endCol: 13
    },
    {
      fieldName: 'InvoiceLogoPath',
      startCol: 1,
      endCol: 4
    },
    {
      fieldName: 'InvoiceLogoId',
      startCol: 4,
      endCol: 7
    },
    {
      fieldName: 'InvoiceAddress'
    },
    {
      fieldName: 'PortalURL',
      startCol: 1,
      endCol: 4
    },
    {
      fieldName: 'PortalLogoId',
      startCol: 4,
      endCol: 7
    },
    {
      fieldName: 'PortalLogoPath',
      startCol: 7,
      endCol: 10
    },
    {
      fieldName: 'PortalConfirmationEmailId',
      startCol: 10,
      endCol: 13
    },
    {
      fieldName: 'OneTimeLink_MessageId',
      startCol: 1,
      endCol: 4
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
