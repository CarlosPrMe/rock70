import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BandsService } from '../services/bands.service';
import { BandModel } from '../models/band.model';

@Injectable({ providedIn: 'root' })
export class BandsResolver implements Resolve<BandModel[]> {

    constructor(private _bandService: BandsService) { }

    resolve(): Observable<BandModel[]> {
        return this._bandService.getBands();
    }
}