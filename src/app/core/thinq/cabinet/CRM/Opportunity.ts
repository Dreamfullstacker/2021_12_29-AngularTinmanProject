/* eslint-disable @typescript-eslint/naming-convention */
import { ThinqFormFieldUI } from 'app/core/thinq/thinq.type';

export class Opportunity {
  fields: ThinqFormFieldUI[] = [
    {
      fieldName: 'Status',
      startCol: 1,
      endCol: 4
    },
    {
      fieldName: 'Churn',
      startCol: 4,
      endCol: 10
    },
    {
      fieldName: 'PartyRoleFromId',
      startCol: 10,
      endCol: 13
    },
    {
      fieldName: 'Probability',
      startCol: 1,
      endCol: 4
    },
    {
      fieldName: 'Currency',
      startCol: 4,
      endCol: 7
    },
    {
      fieldName: 'OpportunityValue',
      startCol: 7,
      endCol: 10
    },
    {
      fieldName: 'OpportunityCost',
      startCol: 10,
      endCol: 13
    },
    {
      fieldName: 'EstimateSaleDate',
      startCol: 1,
      endCol: 4
    },
    {
      fieldName: 'CloseDate',
      startCol: 4,
      endCol: 7
    },
    {
      fieldName: 'Country',
      startCol: 10,
      endCol: 13
    },
    {
      fieldName: 'PartyRoleTo',
      startCol: 1,
      endCol: 10
    },
    {
      fieldName: 'Source',
      startCol: 10,
      endCol: 13
    },
    {
      fieldName: 'Description',
    },
    {
      fieldName: 'Competition',
      startCol: 1,
      endCol: 13
    },
    {
      fieldName: 'CompetitionProduct'
    },
    {
      fieldName: 'NextStep',
      startCol: 1,
      endCol: 10
    },
    {
      fieldName: 'NextStepDate',
      startCol: 10,
      endCol: 13
    },
    {
      fieldName: 'Organisation',
      startCol: 1,
      endCol: 5
    },
    {
      fieldName: 'Contact',
      startCol: 5,
      endCol: 9
    }

  ];
  constructor() {
  }
}
