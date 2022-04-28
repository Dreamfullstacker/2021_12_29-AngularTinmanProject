/* eslint-disable @typescript-eslint/naming-convention */
import { Layout } from 'app/layout/layout.types';

// Types
export type Scheme = 'auto' | 'dark' | 'light';
export type Theme = 'default' | string;
export const Months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

/**
 * AppConfig interface. Update this interface to strictly type your config
 * object.
 */
export interface AppConfig {
    layout: Layout;
    scheme: Scheme;
    theme: Theme;
    timeformat: string;
}

export interface Relationship {
    ClassName: string;
    CssClass: string;
    Enabled: number | boolean;
    Icon: string;
    InverseRelationshipName: string;
    RelationshipId: number;
    RelationshipName: string;
}

export interface CabinetClass {
    ClassDisplayName: string;
    ClassGroup: string;
    ClassId: number;
    ClassName: string;
    CssClass: string;
    Enabled: number;
    Icon: string;
    IsPublic: number;
    IsPublicApp: boolean | null;
    LastViewRefresh: string;
    Personae: string;
    Type: string | null;
}

export interface PartyRole {
    AppDataId: number;
    PartyId: number;
    PartyIdFrom: string;
    PartyIdTo: string;
    PartyName: string;
    PartyRelDef: string;
    PartyRelDefId: number;
    PartyRelType: string;
    PartyRoleDefFromId: number;
    PartyRoleDefId: number;
    PartyRoleDefToId: number;
    PartyRoleDefinition: string;
    PartyRoleFrom: string;
    PartyRoleIdFrom: string;
    PartyRoleIdTo: string;
    PartyRoleLinkId: number;
    PartyRoleTo: string;
    Status: string;
}

/**
 * Default configuration for the entire application. This object is used by
 * FuseConfigService to set the default configuration.
 *
 * If you need to store global configuration for your app, you can use this
 * object to set the defaults. To access, update and reset the config, use
 * FuseConfigService and its methods.
 */
export const appConfig: AppConfig = {
    layout: 'modern',
    scheme: 'light',
    theme: 'brand',
    timeformat: 'D/M/Y'
};

export const avaliableLangs = [
    {
        id: 'en',
        label: 'English'
    },
    {
        id: 'th',
        label: 'Thai'
    }
];

export let appVersion: string;
export let appClasses: CabinetClass[] = [];
export let appRelationship: Relationship[] = [];
export let appUserPersonae: string[] = [];
export let appPartyRoleArray: PartyRole[] = [];

export const setAppVersion = (v: string): void => {
    appVersion = v;
};

export const setAppClasses = (classes: CabinetClass[]): void => {
    appClasses = classes;
};

export const setAppRelations = (relations: Relationship[]): void => {
    appRelationship = relations;
};

export const setAppUserPersonae = (personae: string[]): void => {
    appUserPersonae = personae;
};

export const setAppPartyRoleArray = (roleArray: PartyRole[]): void => {
    appPartyRoleArray = roleArray;
};
