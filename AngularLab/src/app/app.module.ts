import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpInterceptorService} from './authentication/http-interceptor.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CafeListComponent } from './cafe/cafe-list/cafe-list.component';
import { CafeAddComponent } from './cafe/cafe-add/cafe-add.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CafeListComponent,
    CafeAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
