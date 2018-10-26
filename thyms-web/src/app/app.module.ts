import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ErrorComponent } from './error/error.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { MatPaginatorModule} from '@angular/material';
import {CustomMatPaginatorIntl} from './matPaginationIntlService';
import { MatPaginatorIntl } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxDatatableModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    MatNativeDateModule,
    MatPaginatorModule,
    AppRoutingModule
  ],
  providers: [ {provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl}],
  bootstrap: [AppComponent]
})
export class AppModule { }
