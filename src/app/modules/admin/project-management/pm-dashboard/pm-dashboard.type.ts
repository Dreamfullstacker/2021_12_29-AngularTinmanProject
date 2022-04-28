/* eslint-disable @typescript-eslint/naming-convention */
export interface PMProject {
  Abstract: string;
  AppDataId: number;
  AssignedTo: string;
  AssignedToName: string;
  BFTB: string;
  Candidate: string;
  CandidateId: string;
  ClassId: number;
  Contact: string;
  ContactId: string;
  DateTimeCreated: string;
  DeferDate: string;
  Description: string;
  DueDate: string;
  ERP_Customer: string;
  ERP_CustomerId: string;
  EndDate: string;
  Epic: string;
  EpicId: string;
  Estimate: string;
  ExpectedEnd: string;
  ExpectedStart: string;
  Job: string;
  JobId: string;
  Nature: string;
  Organisation: string;
  OrganisationId: string;
  Owner: string;
  OwnerId: string;
  ParentTask: string;
  ParentTaskName: string;
  PartyRole: string;
  PartyRoleId: string;
  Project: string;
  ProjectId: string;
  ProjectTaskId: string;
  Sequence: string;
  SequenceId: string;
  StartDate: string;
  Status: string;
  TimeStamp: string;
  Type: string;
  Value: string;
  age: string;
};

export interface PMTaskType {
  Status: string;
  Type: string;
  count: number;
};

export interface PMCountTaskInfo {
  taskTotalTime: string;
  taskTotals: any;
  taskType: PMTaskType[];
};


export interface PMFilterForm {
  dateFrom: string;
  dateTo: string;
  blnIgnoreClosed: boolean;
  blnIgnoreDate: boolean;
  selectUser: string;
  selectOwner: string;
};

export class PMGroup {
  level = 0;
  parent: PMGroup;
  expanded = true;
  totalCounts = 0;
  get visible(): boolean {
    return !this.parent || (this.parent.visible && this.parent.expanded);
  }
}
