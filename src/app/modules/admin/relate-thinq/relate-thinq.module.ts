import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelateThinqComponent } from './relate-thinq.component';
import { RouterModule } from '@angular/router';
import { relateRoutes } from './relate-thinq.routing';
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
  declarations: [
    RelateThinqComponent
  ],
  imports: [
    RouterModule.forChild(relateRoutes),
    CommonModule,
    SharedModule,
  ]
})
export class RelateThinqModule { }
