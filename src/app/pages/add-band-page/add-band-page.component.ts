import { Component } from '@angular/core';
import { BandModel } from 'src/app/models/band.model';
import { BandsService } from 'src/app/services/bands.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

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
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Banda añadida correctamente',
          showConfirmButton: false,
          timer: 2000
        })
        this._router.navigate(['/home']);
      }
    }, err => {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error!'
      })
    })
  }
}
