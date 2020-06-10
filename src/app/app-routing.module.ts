import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { DetailBandPageComponent } from './pages/detailband/detail-band-page/detail-band-page.component';
import { BandsResolver } from './resolvers/bands.resolver';
import { DetailBandResolver } from './resolvers/detailBand.resolver';
import { AddBandPageComponent } from './pages/add-band-page/add-band-page.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    resolve: {
      bands: BandsResolver
    }
  },
  {
    path: 'band/:id',
    component: DetailBandPageComponent,
    resolve: {
      band: DetailBandResolver
    }
  },
  {
    path: 'add-band',
    component: AddBandPageComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
