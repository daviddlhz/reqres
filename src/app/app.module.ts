import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { localStorageProvider } from '@domain/storage/localstorage.provide';
import { interceptorProvider } from '@core/services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    localStorageProvider,
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
