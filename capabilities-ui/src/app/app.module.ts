import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoaderComponent } from './components/loader/loader.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { CreateCapabilityComponent } from './components/capabilities/create-capability/create-capability.component';
import { ListCapabilitiesComponent } from './components/capabilities/list-capabilities/list-capabilities.component';
import { CapabilityService } from './services/capability.service';
import { ErrorService } from './services/error.service';
import { HttpService } from './services/http.service';
import { CustomErrorHandler } from './classes/custom-error-handler.class';
import { CustomErrorHandlerModule } from './modules/custom-error-handler.module';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoaderComponent,
    TopNavigationComponent,
    CreateCapabilityComponent,
    ListCapabilitiesComponent,
    MessagesComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CustomErrorHandlerModule
  ],
  providers: [
    CapabilityService,
    ErrorService,
    CustomErrorHandler,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
