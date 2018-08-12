import { NgModule } from '@angular/core';

// Modulos
import { SharedModule } from '../shared/shared.module';

// Routes
import { PAGES_ROUTERS } from './pages.routes';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTERS
    ]
})

export class PagesModule { }
