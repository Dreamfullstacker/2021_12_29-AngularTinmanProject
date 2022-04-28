/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class User {
  fields: ThinqFormFieldUI[] = [
    {
      fieldName: 'LoginStatus'
    },
    {
      fieldName: 'LoginName'
    },
    {
      fieldName: 'FirstName'
    },
    {
      fieldName: 'LastName'
    },
    {
      fieldName: 'Email'
    },
    {
      fieldName: 'Avatar'
    },
    {
      fieldName: 'Role'
    },
    {
      fieldName: 'PinCode'
    },
    {
      fieldName: 'PreferredHomePage'
    },
    {
      fieldName: 'PortalURL',
      startCol: 1,
      endCol: 7,
    },
    {
      fieldName: 'PortalThinqId',
      startCol: 7,
      endCol: 9,
    },
    {
      fieldName: 'PortalThinqClass',
      startCol: 9,
      endCol: 13,
    },
    {
      fieldName: 'Function',
      startCol: 7,
      endCol: 13,
    },
    {
      fieldName: 'LastLoginAttempt',
    },
    {
      fieldName: 'LicenseAccepted',
    },
    {
      fieldName: 'TasKDaily',
    },
    {
      fieldName: 'TaskChanges',
    },
    {
      fieldName: 'Biography',
    }

  ];
  constructor() {
  }
}
