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
import { AddBandPageComponent } from './pages/add-band-page/add-band-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerComponent } from './shared/spinner/spinner.component';

// Interceptors
import { SpinnerInterceptorService } from './interceptors/spinner-interceptor.service';
import { FormBandComponent } from './shared/form-band/form-band.component';
import { ScrollTopComponent } from './shared/scroll-top/scroll-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    CardComponent,
    MainListComponent,
    SearcherComponent,
    DetailBandPageComponent,
    PredictiveResultsComponent,
    AddBandPageComponent,
    SpinnerComponent,
    FormBandComponent,
    ScrollTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SpinnerInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
