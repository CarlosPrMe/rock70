import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { DetailBandPageComponent } from './pages/detailband/detail-band-page/detail-band-page.component';
import { BandsResolver } from './resolvers/bands.resolver';
import { DetailBandResolver } from './resolvers/detailBand.resolver';


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
