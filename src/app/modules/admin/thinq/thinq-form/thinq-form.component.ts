import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { ThinqFormField, ThinqFormFieldUI } from 'app/core/thinq/thinq.type';
import { Contact } from 'app/core/thinq/cabinet/CRM/Contact';
import { Opportunity } from 'app/core/thinq/cabinet/CRM/Opportunity';
import { Organisation } from 'app/core/thinq/cabinet/CRM/Organisation';
import { Campaign } from 'app/core/thinq/cabinet/Communication/Campaign';
import { Email } from 'app/core/thinq/cabinet/Communication/Email';
import { GeoLocation } from 'app/core/thinq/cabinet/Communication/GeoLocation';
import { Group } from 'app/core/thinq/cabinet/Communication/Group';
import { TemplateMessage } from 'app/core/thinq/cabinet/Communication/TemplateMessage';
import { Party_Contact_Mechanism } from 'app/core/thinq/cabinet/Communication/Party_Contact_Mechanism';
import { Sms } from 'app/core/thinq/cabinet/Communication/Sms';
import { Document } from 'app/core/thinq/cabinet/Documentation/Document';
import { Party_Organisation } from 'app/core/thinq/cabinet/Party/Party_Organisation';
import { Party_Classification } from 'app/core/thinq/cabinet/Party/Party_Classification';
import { Party_Person } from 'app/core/thinq/cabinet/Party/Party_Person';
import { Party_Relationship } from 'app/core/thinq/cabinet/Party/Party_Relationship';
import { Party_Role } from 'app/core/thinq/cabinet/Party/Party_Role';
import { Party_Classification_Def } from 'app/core/thinq/cabinet/Party_Definitions/Party_Classification_Def';
import { Party_Relationship_Def } from 'app/core/thinq/cabinet/Party_Definitions/Party_Relationship_Def';
import { Party_Role_Def } from 'app/core/thinq/cabinet/Party_Definitions/Party_Role_Def';
import { Action } from 'app/core/thinq/cabinet/Project/Action';
import { Epic } from 'app/core/thinq/cabinet/Project/Epic';
import { Project } from 'app/core/thinq/cabinet/Project/Project';
import { ProjectTask } from 'app/core/thinq/cabinet/Project/ProjectTask';
import { Timesheet } from 'app/core/thinq/cabinet/Project/Timesheet';
import { Application } from 'app/core/thinq/cabinet/Recruitment/Application';
import { Candidate } from 'app/core/thinq/cabinet/Recruitment/Candidate';
import { CandidateAction } from 'app/core/thinq/cabinet/Recruitment/CandidateAction';
import { Job } from 'app/core/thinq/cabinet/Recruitment/Job';
import { WebPostAdo } from 'app/core/thinq/cabinet/Recruitment/WebPostAdo';
import { Survey } from 'app/core/thinq/cabinet/Survey/Survey';
import { Survey_Question } from 'app/core/thinq/cabinet/Survey/Survey_Question';
import { Survey_Answer } from 'app/core/thinq/cabinet/Survey/Survey_Answer';
import { FilteredList } from 'app/core/thinq/cabinet/System/FilteredList';
import { Lookup } from 'app/core/thinq/cabinet/System/Lookup';
import { Repeater } from 'app/core/thinq/cabinet/System/Repeater';
import { System_Org } from 'app/core/thinq/cabinet/System/System_Org';
import { User } from 'app/core/thinq/cabinet/System/User';
import { KoneQTUtils } from 'app/core/koneqt.utils';

@Component({
  selector: 'app-thinq-form',
  templateUrl: './thinq-form.component.html',
  styleUrls: ['./thinq-form.component.scss'],
  encapsulation  : ViewEncapsulation.None,
})
export class ThinqFormComponent implements OnInit, OnChanges {

  @Input() cabinet: string;
  @Input() arrFields: BehaviorSubject<ThinqFormField[]>;
  fields: ThinqFormFieldUI[];
  thinqForm: FormGroup;
  thinqSaveForm: any;
  objectKeys = Object.keys;

  constructor(
    private _kqUtils: KoneQTUtils
  ) { }

  ngOnInit(): void {
  }

  getCabinetFields(): ThinqFormFieldUI[] {
    switch(this.cabinet) {
      // CRM
      case 'Contact':
      return new Contact().fields;
      case 'Opportunity':
      return new Opportunity().fields;
      case 'Organisation':
      return new Organisation().fields;
      // Communication
      case 'Campaign':
      return new Campaign().fields;
      case 'Email':
      return new Email().fields;
      case 'GeoLocation':
      return new GeoLocation().fields;
      case 'Group':
      return new Group().fields;
      case 'TemplateMessage':
      return new TemplateMessage().fields;
      case 'Party_Contact_Mechanism':
      return new Party_Contact_Mechanism().fields;
      case 'Sms':
      return new Sms().fields;
      // Documentation
      case 'Document':
      return new Document().fields;
      // Party
      case 'Party_Organisation':
      return new Party_Organisation().fields;
      case 'Party_Classification':
      return new Party_Classification().fields;
      case 'Party_Person':
      return new Party_Person().fields;
      case 'Party_Relationship_Link':
      return new Party_Relationship().fields;
      case 'Party_Role_Link':
      return new Party_Role().fields;
      // Party Definitions
      case 'Party_Classification_Def':
      return new Party_Classification_Def().fields;
      case 'Party_Relationship_Def':
      return new Party_Relationship_Def().fields;
      case 'Party_Role_Def':
      return new Party_Role_Def().fields;
      // Project
      case 'Action':
      return new Action().fields;
      case 'ProjectEpic':
      return new Epic().fields;
      case 'Project':
      return new Project().fields;
      case 'ProjectTask':
      return new ProjectTask().fields;
      case 'Timesheet':
      return new Timesheet().fields;
      // Recruitment
      case 'Application':
      return new Application().fields;
      case 'Candidate':
      return new Candidate().fields;
      case 'CandidateAction':
      return new CandidateAction().fields;
      case 'Job':
      return new Job().fields;
      case 'WebPostAdo':
      return new WebPostAdo().fields;
      // Survey
      case 'Survey':
      return new Survey().fields;
      case 'Survey_Question':
      return new Survey_Question().fields;
      case 'Survey_Answer':
      return new Survey_Answer().fields;
      // System
      case 'FilteredList':
      return new FilteredList().fields;
      case 'Lookup':
      return new Lookup().fields;
      case 'Repeater':
      return new Repeater().fields;
      case 'System_Org':
      return new System_Org().fields;
      case 'User':
      return new User().fields;
    }
    return null;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', this.arrFields);
    this.thinqForm = new FormGroup({});
    this.fields = this.getCabinetFields();
    if(this.fields) {
      // custom cabinet form existed
      for (const iterator of this.fields) {
        const thinqField = this.arrFields[iterator.fieldName];
        if(!thinqField) {
          continue;
        }
        let value = thinqField.Value.toString();
        if (thinqField.Type === 'dte') {
          value = this._kqUtils.convertToNormalDate(value);
        }
        if (thinqField.Type === 'ddl') {
          const options = [];
          for (const key in thinqField.Options) {
            if (Object.prototype.hasOwnProperty.call(thinqField.Options, key)) {
              options.push({
                value: key,
                label: thinqField.Options[key]
              });
            }
          }
          this.arrFields[iterator.fieldName].Options = options;
        }
        if (thinqField.Type === 'txl' && thinqField.Lookup?.id) {
          const txlIdField = this.arrFields[thinqField.Lookup['id']];
          if(txlIdField) {
            this.thinqForm.addControl(thinqField.Lookup['id'], new FormControl(txlIdField.Value));
          }
        }
        this.thinqForm.addControl(iterator.fieldName, new FormControl(value));
      }
    } else {
      // basic form
      for (const key in this.arrFields) {
        if (Object.prototype.hasOwnProperty.call(this.arrFields, key)) {
          const field = this.arrFields[key];
          let value = field.Value.toString();
          if (field.Type === 'dte') {
            value = this._kqUtils.convertToNormalDate(value);
          }
          if (field.Type === 'ddl') {
            const options = [];
            for (const optionKey in field.Options) {
              if (Object.prototype.hasOwnProperty.call(field.Options, optionKey)) {
                options.push({
                  value: optionKey,
                  label: field.Options[optionKey]
                });
              }
            }
            this.arrFields[key].Options = options;
          }
          this.thinqForm.addControl(key, new FormControl(value));
        }
      }
    }
    this.thinqSaveForm = this.thinqForm.value;
  }

  saveFormValue(): void {
    this.thinqSaveForm = this.thinqForm.value;
  }

  resetForm(): void {
    this.thinqForm.reset(this.thinqSaveForm);
  }

  generateCol(fieldUI: ThinqFormFieldUI, type: string): string {
    if(fieldUI.startCol && fieldUI.endCol) {
      return 'col-span-12 sm:col-start-' + fieldUI.startCol + ' sm:col-end-' + fieldUI.endCol;
    } else if(!['txa','htm'].includes(type)) {
      return 'col-span-12 sm:col-span-6';
    } else if(['txa','htm'].includes(type)) {
      return 'col-span-12';
    }
  }

  getTxlControl(fieldName: string): AbstractControl {
    const thinqTxlField = this.arrFields[fieldName];
    if(thinqTxlField.Type !== 'txl' || !thinqTxlField.Lookup?.id) {
      return null;
    }
    const txlIdField = thinqTxlField.Lookup['id'];
    if(txlIdField && this.thinqForm.get(txlIdField)) {
      return this.thinqForm.controls[txlIdField];
    }
    return null;
  }
}
