import { Component, OnInit } from '@angular/core';
import { BandsService } from 'src/app/services/bands.service';
import { BandModel } from 'src/app/models/band.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePageComponent implements OnInit {

  public atHomePage: boolean;

  constructor(private _activate: ActivatedRoute, private bandsServices: BandsService) { }
  public bands: Array<BandModel>
  ngOnInit(): void {
    this.bands = this._activate.snapshot.data.bands;
    this.atHomePage = true;
  }

}
