import {Routes, RouterModule} from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { NopaguefoundComponent } from './nopaguefound/nopaguefound.component';

const appRoutes: Routes = [

    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: '**', component: NopaguefoundComponent}
];

export const APP_ROUTERS = RouterModule.forRoot(appRoutes, {useHash: true});
