import { Component, OnInit, Input } from '@angular/core';
import { BandModel } from 'src/app/models/band.model';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit {


  @Input() bands: Array<BandModel>

  constructor() { }

  ngOnInit(): void { }

}
