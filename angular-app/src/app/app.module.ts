import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './implementation/header/header.component';
import { HomeComponent } from './implementation/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AnalyticsComponent } from './implementation/analytics/analytics.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AnalyticsComponent,
    NgChartsModule  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
