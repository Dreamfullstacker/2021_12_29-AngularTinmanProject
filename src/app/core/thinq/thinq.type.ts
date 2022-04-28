import { FooterButtonData } from 'app/layout/layout.types';

/* eslint-disable @typescript-eslint/naming-convention */
export interface ThinqResponse {
  Status: string;
  Error: string;
  AppDataId: string;
  Abstract: string;
  ClassName: string;
  ClassDisplayName: string;
  ClassFileName: string;
  CRUD: ThinqAccessOption;
  Core: ThinqCore;
  ClassId: number;
  TimeStamp: string;
  CreatorId: number;
  DateTimeCreated: string;
  ClassSeqId: string | null;
  Icon: string;
  CssClass: string;
  LastViewRefresh: string;
  Personae: string;
  ClassGroup: string;
  CreatedBy: string;
  Relate: ThinqRelation[];
  Fields: ThinqFormField[];
  FooterButtons: FooterButtonData[];
};

export interface ThinqFormField {
  Type: string;
  DataType?: string;
  Label: string;
  Width?: number;
  Format?: string;
  Align?: string;
  Lookup?: any;
  //22/10/2018 NR added for fields to be logged
  AuditStatus?: boolean;
  Mandatory?: boolean;
  ReadOnly?: boolean;
  Default?: string;
  ExcludeFromSearch?: boolean;
  ExcludeFromView?: boolean;
  ExcludeFromApi?: boolean;
  GenerateLink?: boolean;
  GenerateURL?: boolean;
  InheritsFrom?: string;
  Valid?: boolean;
  ErrorMessage?: string;
  RenderLevel?: string;
  Value?: string;
  Changed?: string;
  Update?: boolean;
  Options?: any;
  ChangeAudit?: string | null;
}

export interface ThinqAccessOption {
  Create: boolean;
  Read: boolean;
  Update: boolean;
  Delete: boolean;
}

export interface ThinqCore {
  ENV_PERSONA: string;
  ENV_THINQSAVE_REMAINONPAGE: boolean;
  MAX_FILE_SIZE: string;
}

export interface ThinqRelation {
  RelationshipName: string;
  AppDataId: number;
  ClassId: number;
  TimeStamp: string;
  ClassName: string;
  ClassIcon: string;
  ClassCssClass: string;
  Abstract: string;
  SourceId: number;
  RelationshipId: number;
  TargetId: number;
  DateTimeCreated: string;
}

export interface ThinqFormFieldUI {
  fieldName: string;
  startCol?: number;
  endCol?: number;
}

export interface AdminViewPagination
{
  page: number;
  size: number;
  length: number;
}
