import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseDrawerModule } from '@fuse/components/drawer';
import { LayoutComponent } from 'app/layout/layout.component';
import { EmptyLayoutModule } from 'app/layout/layouts/empty/empty.module';
import { ModernLayoutModule } from 'app/layout/layouts/horizontal/modern/modern.module';
import { SharedModule } from 'app/shared/shared.module';

const layoutModules = [
    // Empty
    EmptyLayoutModule,

    // Horizontal navigation
    ModernLayoutModule,
];

@NgModule({
    declarations: [
        LayoutComponent,
    ],
    imports     : [
        MatIconModule,
        MatTooltipModule,
        FuseDrawerModule,
        SharedModule,
        ...layoutModules
    ],
    exports: [
        LayoutComponent,
        ...layoutModules,
    ]
})
export class LayoutModule
{
}
