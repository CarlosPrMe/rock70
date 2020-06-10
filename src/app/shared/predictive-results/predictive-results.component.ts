import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BandModel } from 'src/app/models/band.model';

@Component({
  selector: 'app-predictive-results',
  templateUrl: './predictive-results.component.html',
  styleUrls: ['./predictive-results.component.scss']
})
export class PredictiveResultsComponent implements OnInit {

  @Input('bands') bands: Array<BandModel>;
  @Output() navigate = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  public navigation(event, id) {
    event.preventDefault();
    this.navigate.emit(id);
  }

}
