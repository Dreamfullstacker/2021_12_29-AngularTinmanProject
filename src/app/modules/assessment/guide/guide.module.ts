import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuideComponent } from './guide.component';
import { TranslocoModule } from '@ngneat/transloco';
import { RouterModule } from '@angular/router';
import { guideRoutes } from './guide.routing';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    GuideComponent
  ],
  imports: [
    RouterModule.forChild(guideRoutes),
    CommonModule,
    MatIconModule,
    MatButtonModule,
    TranslocoModule,
  ]
})
export class GuideModule { }
