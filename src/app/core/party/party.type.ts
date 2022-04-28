/* eslint-disable @typescript-eslint/naming-convention */
export interface PartyRole {
  PartyName: string;
  AppDataId: number;
  PartyId: number;
  PartyRoleLinkId: number;
  PartyRoleDefId: number;
  PartyRoleDefinition: string | null;
  Status: string | null;
  PartyRelType: string | null;
  PartyRoleDefFromId: string | null;
  PartyRoleIdFrom: string | null;
  PartyRoleFrom: string | null;
  PartyIdFrom: string | null;
  PartyRelDefId: string | null;
  PartyRelDef: string | null;
  PartyRoleDefToId: string | null;
  PartyRoleIdTo: string | null;
  PartyRoleTo: string | null;
  PartyIdTo: string | null;
}
