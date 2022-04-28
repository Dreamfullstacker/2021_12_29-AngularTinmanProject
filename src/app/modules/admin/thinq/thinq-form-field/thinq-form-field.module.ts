import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThinqFormfieldComponent } from './thinq-form-field.component';
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
  declarations: [
    ThinqFormfieldComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ThinqFormfieldComponent
  ],
})
export class ThinqFormFieldModule { }
