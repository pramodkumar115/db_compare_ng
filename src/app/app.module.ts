import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DbselectorComponent } from './components/dbselector/dbselector.component';
import { DbPanelComponent } from './components/db-panel/db-panel.component';
import { TableResultComponent } from './components/table-result/table-result.component';
import { PackageResultComponent } from './components/package-result/package-result.component';
import { ProcedureResultComponent } from './components/procedure-result/procedure-result.component';
import { FunctionResultComponent } from './components/function-result/function-result.component';
import { ViewResultComponent } from './components/view-result/view-result.component';
import { SequenceResultComponent } from './components/sequence-result/sequence-result.component';
import { SchemaResultComponent } from './components/schema-result/schema-result.component';
import { DataResultComponent } from './components/data-result/data-result.component';
import { DatabaseResultComponent } from './components/database-result/database-result.component';
import { SettingsComponent } from './components/settings/settings.component';

const appRoutes: Routes = [
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: DbselectorComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DbselectorComponent,
    DbPanelComponent,
    TableResultComponent,
    PackageResultComponent,
    ProcedureResultComponent,
    FunctionResultComponent,
    ViewResultComponent,
    SequenceResultComponent,
    SchemaResultComponent,
    DataResultComponent,
    DatabaseResultComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
