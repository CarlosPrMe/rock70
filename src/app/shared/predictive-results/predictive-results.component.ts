import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-predictive-results',
  templateUrl: './predictive-results.component.html',
  styleUrls: ['./predictive-results.component.scss']
})
export class PredictiveResultsComponent implements OnInit {


  @Input('show') show: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
