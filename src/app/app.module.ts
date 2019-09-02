import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';

import { BackendService } from './backend.service';
import { ContactListComponent } from './contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    InMemoryWebApiModule.forRoot(BackendService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
