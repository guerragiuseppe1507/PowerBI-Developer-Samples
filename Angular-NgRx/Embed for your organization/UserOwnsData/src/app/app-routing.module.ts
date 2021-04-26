import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmbedReportComponent } from './embed-report/embed-report.component';
import { EmbedDashboardComponent } from './embed-dashboard/embed-dashboard.component';
import { EmbedTileComponent } from './embed-tile/embed-tile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'embed-report', component: EmbedReportComponent },
  { path: 'embed-dashboard', component: EmbedDashboardComponent },
  { path: 'embed-tile', component: EmbedTileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }