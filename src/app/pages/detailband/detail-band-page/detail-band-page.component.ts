import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BandModel } from 'src/app/models/band.model';
import { MockService } from 'src/app/services/mockService.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-band-page',
  templateUrl: './detail-band-page.component.html',
  styleUrls: ['./detail-band-page.component.scss']
})
export class DetailBandPageComponent implements OnInit {

  public band: BandModel;
  public showDetails: boolean;
  private _confirmDelete: boolean;
  constructor(private _activate: ActivatedRoute, private _mockService: MockService, private _saneticer: DomSanitizer) { }

  ngOnInit(): void {
    this.band = this._activate.snapshot.data.band;
    this.band.members.forEach(m => m.image = this._mockService.setAvatar()); //Mock to show some images. Better with real photos
    this.band.discography.forEach(a => a.cover = this._mockService.setCover()); //Mock to show some images. Better with real photos
    this.showDetails = false;
    this._confirmDelete = false;
  }

  public showMore() {
    this.showDetails = !this.showDetails
  }

  public videoLink(video) {
    return this._saneticer.bypassSecurityTrustResourceUrl(video);
  }

  public deleteBand() {
    this._confirmDelete = confirm('¿Seguro que quieres eliminar el grupo?');
    console.log(this._confirmDelete);
    
  }
}