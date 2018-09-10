import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTERS } from './app.routes';

// Modulos
import { PagesModule } from './pages/pages.module';

// servicios
import { ServiceModule } from './service/service.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopaguefoundComponent } from './nopaguefound/nopaguefound.component';
import { RegisterComponent } from './login/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NopaguefoundComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTERS,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
