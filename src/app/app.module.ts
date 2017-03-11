import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ClassProvider, FactoryProvider } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from 'app-routing.module';
import { AuthModule, Authorize, AuthService } from './auth/index';
import { DefaultRequestOptionsService, StorageService, InitializerService } from './helpers/index';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OdataService } from './services/OdataService';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AuthModule,
    AppRoutingModule
  ],
  providers: [ 
    Authorize,
    AuthService,
    StorageService,
    <ClassProvider>{provide: RequestOptions, useClass: DefaultRequestOptionsService},
    OdataService,
    <FactoryProvider>{provide: InitializerService, useFactory: InitializerService.factory}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
