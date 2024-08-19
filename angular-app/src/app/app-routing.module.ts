import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './implementation/analytics/analytics.component';

const routes: Routes = [
  { path: 'analytics', component: AnalyticsComponent }, // Добавьте маршрут для компонента Analytics

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
