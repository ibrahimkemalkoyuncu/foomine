import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoupensComponent } from './page/coupens/coupens.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { MediaComponent } from './page/media/media.component';
import { PagesComponent } from './page/pages/pages.component';
import { ProductsComponent } from './page/products/products.component';
import { SettingsComponent } from './page/settings/settings.component';
import { StatisticsComponent } from './page/statistics/statistics.component';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'coupens', component: CoupensComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'media', component: MediaComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
