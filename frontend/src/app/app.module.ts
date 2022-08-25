import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { SidenavComponent } from './components/partials/sidenav/sidenav.component';
import { BodyComponent } from './page/body/body.component';
import { CoupensComponent } from './page/coupens/coupens.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { MediaComponent } from './page/media/media.component';
import { PagesComponent } from './page/pages/pages.component';
import { ProductsComponent } from './page/products/products.component';
import { SettingsComponent } from './page/settings/settings.component';
import { StatisticsComponent } from './page/statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    ProductsComponent,
    StatisticsComponent,
    CoupensComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
