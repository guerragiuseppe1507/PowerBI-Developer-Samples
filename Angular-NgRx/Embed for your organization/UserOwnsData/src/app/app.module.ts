import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmbedReportComponent } from './embed-report/embed-report.component';
import { EmbedDashboardComponent } from './embed-dashboard/embed-dashboard.component';
import { EmbedTileComponent } from './embed-tile/embed-tile.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EmbedReportComponent,
    EmbedDashboardComponent,
    EmbedTileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
