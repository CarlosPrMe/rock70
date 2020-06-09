import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BandsService } from '../services/bands.service';
import { BandModel } from '../models/band.model';

@Injectable({ providedIn: 'root' })
export class DetailBandResolver implements Resolve<BandModel> {

    constructor(private _bandService: BandsService) { }

    resolve(
        route: ActivatedRouteSnapshot
    ): Observable<BandModel> {
        return this._bandService.getBandById(+route.paramMap.get('id'));
    }
}