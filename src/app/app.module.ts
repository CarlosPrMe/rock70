import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { CardComponent } from './shared/card/card.component';
import { MainListComponent } from './shared/main-list/main-list.component';
import { SearcherComponent } from './shared/searcher/searcher.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailBandPageComponent } from './pages/detailband/detail-band-page/detail-band-page.component';
import { PredictiveResultsComponent } from './shared/predictive-results/predictive-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    CardComponent,
    MainListComponent,
    SearcherComponent,
    DetailBandPageComponent,
    PredictiveResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
