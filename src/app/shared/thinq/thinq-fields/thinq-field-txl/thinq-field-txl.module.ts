import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThinqFieldTxlComponent } from './thinq-field-txl.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ThinqFieldTxlComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    NgSelectModule,
    NgOptionHighlightModule,
  ],
  exports: [
    ThinqFieldTxlComponent
  ]
})
export class ThinqFieldTxlModule { }
