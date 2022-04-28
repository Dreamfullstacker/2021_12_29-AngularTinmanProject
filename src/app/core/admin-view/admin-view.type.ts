import { CabinetClass } from 'app/core/config/app.config';

/* eslint-disable @typescript-eslint/naming-convention */

export interface GetDataResponse {
    Authenticated: boolean;
    Data: ApiV1GetDataResponse;
    Message: string;
    Timestamp: string;
    TokenExpires: string;
}

export interface ApiV1GetDataResponse {
  ClassId: number;
  ClassName: string;
  Data: any[];
  Fields: any;
  PageNumber: number;
  PageSize: number;
  QueryTime: string;
  RowCount: number;
}

export interface ApiV1GetThinqListResponse {
  Class: CabinetClass;
  ClassId: number;
  ClassName: string;
  Data: any[];
  Fields: any;
  Fields2?: any[];
  PageNumber: number;
  PageSize: number;
  QueryTime: string;
  RowCount: number;
}

export interface ApiGetDataResponse {
  Authenticated: boolean;
  Data: ApiV1GetDataResponse;
  Message: string;
  Timestamp: string;
  TokenExpires: string;
}
