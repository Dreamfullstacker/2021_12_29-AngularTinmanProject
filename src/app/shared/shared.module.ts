import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { QuillModule } from 'ngx-quill';
import { CabinetIconComponent } from './cabinet-icon/cabinet-icon.component';
import { CabinetHeaderComponent } from './layout/cabinet-header/cabinet-header.component';
import { ThinqFieldTxtComponent } from './thinq/thinq-fields/thinq-field-txt/thinq-field-txt.component';
import { ThinqFieldTxaComponent } from './thinq/thinq-fields/thinq-field-txa/thinq-field-txa.component';
import { ThinqFieldHtmComponent } from './thinq/thinq-fields/thinq-field-htm/thinq-field-htm.component';
import { ThinqFieldEmailComponent } from './thinq/thinq-fields/thinq-field-email/thinq-field-email.component';
import { ThinqFieldDdlComponent } from './thinq/thinq-fields/thinq-field-ddl/thinq-field-ddl.component';
import { ThinqFieldChkComponent } from './thinq/thinq-fields/thinq-field-chk/thinq-field-chk.component';
import { ThinqFieldDteComponent } from './thinq/thinq-fields/thinq-field-dte/thinq-field-dte.component';
import { AppFooterComponent } from './layout/footer/app-footer.component';
import { ThinqFieldTxlModule } from './thinq/thinq-fields/thinq-field-txl/thinq-field-txl.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterButtonComponent } from './layout/footer/components/footer-button/footer-button.component';
import { FooterDropdownComponent } from './layout/footer/components/footer-dropdown/footer-dropdown.component';
import { MatMenuModule } from '@angular/material/menu';
import { ClassGroupComponent } from './thinq/create-thinq/class-group/class-group.component';
import { ExistingRelationshipsComponent } from './thinq/relate-thinq/existing-relationships/existing-relationships.component';
import { NewRelationshipsComponent } from './thinq/relate-thinq/new-relationships/new-relationships.component';
import { RelationSearchComponent } from './thinq/relate-thinq/relation-search/relation-search.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { RouterModule } from '@angular/router';
import { ShortNumberPipe } from './pipe/short-number.pipe';
import { ThinqFieldToggleComponent } from './thinq/thinq-fields/thinq-field-toggle/thinq-field-toggle.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule,
    MatRippleModule,
    QuillModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatMomentDateModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatSelectModule,
    MatSlideToggleModule,
    ThinqFieldTxlModule,
    NgxPaginationModule,
    NgSelectModule,
    NgOptionHighlightModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CabinetHeaderComponent,
    CabinetIconComponent,
    ThinqFieldTxtComponent,
    ThinqFieldTxaComponent,
    ThinqFieldHtmComponent,
    ThinqFieldEmailComponent,
    ThinqFieldDdlComponent,
    ThinqFieldChkComponent,
    ThinqFieldDteComponent,
    ThinqFieldTxlModule,
    ThinqFieldToggleComponent,
    AppFooterComponent,
    ClassGroupComponent,
    ExistingRelationshipsComponent,
    NewRelationshipsComponent,
    RelationSearchComponent,
    ShortNumberPipe
  ],
  declarations: [
    CabinetHeaderComponent,
    CabinetIconComponent,
    ThinqFieldTxtComponent,
    ThinqFieldTxaComponent,
    ThinqFieldHtmComponent,
    ThinqFieldEmailComponent,
    ThinqFieldDdlComponent,
    ThinqFieldChkComponent,
    ThinqFieldDteComponent,
    ThinqFieldToggleComponent,
    AppFooterComponent,
    FooterButtonComponent,
    FooterDropdownComponent,
    ClassGroupComponent,
    ExistingRelationshipsComponent,
    NewRelationshipsComponent,
    RelationSearchComponent,
    ShortNumberPipe,
  ],
  providers: [
    DatePipe,
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ],
})
export class SharedModule
{
}
