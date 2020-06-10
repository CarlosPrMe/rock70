import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BandModel } from 'src/app/models/band.model';
import { MockService } from 'src/app/services/mockService.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BandsService } from 'src/app/services/bands.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-detail-band-page',
  templateUrl: './detail-band-page.component.html',
  styleUrls: ['./detail-band-page.component.scss']
})
export class DetailBandPageComponent implements OnInit {

  public band: BandModel;
  public showDetails: boolean;
  public video: SafeResourceUrl
  private _confirmDelete: boolean;

  constructor(private _activate: ActivatedRoute, private _mockService: MockService,
    private _saneticer: DomSanitizer, private _bandsService: BandsService, private _router: Router) { }

  ngOnInit(): void {
    this.band = this._activate.snapshot.data.band;
    this.band = this._mockSomeData(this.band);
    this.showDetails = false;
    this._confirmDelete = false;
    this._activate.params.subscribe(res => {
      if (res.id) {
        this._bandsService.getBandById(res.id).subscribe(band => {
          this.band = this._mockSomeData(band);
        })
      }
    })
  }

  private _mockSomeData(band): BandModel {
    band.members?.forEach(m => !m.image ? m.image = this._mockService.setAvatar() : null); // Mock para fotos. Lo ideal sería que viniesen de la API
    band.discography?.forEach(a => !a.cover ? a.cover = this._mockService.setCover() : null); // Mock para fotos. Lo ideal sería que viniesen de la API
    this.video = this._videoLink(band.video);
    return band;
  }

  public showMore() {
    this.showDetails = !this.showDetails;
  }

  private _videoLink(video) {
    return this._saneticer.bypassSecurityTrustResourceUrl(video);
  }

  public deleteBand(id) {
    swal.fire({
      title: '¿Eliminar banda?',
      text: "¿Seguro que quieres eliminar el grupo?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#119e32',
      cancelButtonColor: '#be1e1e',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.value) {
        this._bandsService.deleteBand(id).subscribe(res => {
          swal.fire(
            'Eliminado!',
            'La banda se ha eliminado.',
            'success'
          )
          this._router.navigate(['/home']);
        }, err => {
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un error!'
          })
        })
      }
    })
  }
}
