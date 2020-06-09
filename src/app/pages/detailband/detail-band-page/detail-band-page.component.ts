import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BandModel } from 'src/app/models/band.model';
import { MockService } from 'src/app/services/mockService.service';

@Component({
  selector: 'app-detail-band-page',
  templateUrl: './detail-band-page.component.html',
  styleUrls: ['./detail-band-page.component.scss']
})
export class DetailBandPageComponent implements OnInit {

  public band : BandModel;
  public showDetails: boolean;
  constructor(private _activate: ActivatedRoute, private _mockService: MockService) { }

  ngOnInit(): void {
    this.band = this._activate.snapshot.data.band;
    this.band.members.forEach(m => m.image = this._mockService.setAvatar()); //Mock to show some images. Better with real photos
    this.band.discography.forEach(a => a.cover = this._mockService.setCover()); //Mock to show some images. Better with real photos
    this.showDetails = false;
  }

  public showMore(){
    this.showDetails = !this.showDetails
  }

}
