import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateThinqComponent } from './create-thinq.component';
import { RouterModule } from '@angular/router';
import { createRoutes } from './create-thinq.routing';
import { SharedModule } from 'app/shared/shared.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { A11yModule } from '@angular/cdk/a11y';


@NgModule({
  declarations: [
    CreateThinqComponent
  ],
  imports: [
    RouterModule.forChild(createRoutes),
    CommonModule,
    A11yModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    SharedModule,
  ]
})
export class CreateThinqModule { }
