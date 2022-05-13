import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CreatePersoncomponent} from './person/create-person/create-personcomponent';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PersonService} from './service/person.service';
import {HttpClientModule} from '@angular/common/http';
import {PersonListComponent} from './person/persons-list/person-list.component';
import {UpdatePersonComponent} from './person/update-person/update-person.component';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    CreatePersoncomponent,
    PersonListComponent,
    UpdatePersonComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
