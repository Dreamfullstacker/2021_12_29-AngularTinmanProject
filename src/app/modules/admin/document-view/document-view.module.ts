import { NgModule } from '@angular/core';
import { DocumentViewComponent } from './document-view.component';
import { RouterModule } from '@angular/router';
import { documentViewRoutes } from './document-view.routing';
import { NgxDocViewerModule } from 'ngx-doc-viewer';



@NgModule({
  declarations: [
    DocumentViewComponent
  ],
  imports: [
    RouterModule.forChild(documentViewRoutes),
    NgxDocViewerModule
  ]
})
export class DocumentViewModule { }
