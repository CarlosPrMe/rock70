import { Component } from '@angular/core';
import { BandModel } from 'src/app/models/band.model';
import { BandsService } from 'src/app/services/bands.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-band-page',
  templateUrl: './add-band-page.component.html',
  styleUrls: ['./add-band-page.component.scss']
})
export class AddBandPageComponent {

  constructor(private bandsService: BandsService, private _router: Router) { }

  public onNewBand(band: BandModel) {
    this.bandsService.addBand(band).subscribe(res => {
      if (res.id) {
        alert('Banda añadida Correctamente');
        this._router.navigate(['/home']);
      }
    }, err => {
      alert('Hubo un error al añadir la banda');
    })
  }
}
