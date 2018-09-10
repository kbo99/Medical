import {Routes, RouterModule} from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { LoginGuardGuard } from '../service/services.index';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [LoginGuardGuard],
        children: [
          { path: 'dashboard', component: DashboardComponent},
          { path: 'account-settings', component: AccountSettingsComponent},
          { path: 'progress', component: ProgressComponent},
          { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
        ]
    }
];

export const PAGES_ROUTERS = RouterModule.forChild(pagesRoutes);
