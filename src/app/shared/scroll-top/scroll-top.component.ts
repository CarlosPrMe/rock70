import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent implements OnChanges {

  public show: boolean;

  @Input() scrollValue: number;

  ngOnChanges(change: SimpleChanges) {
    change.scrollValue.currentValue > 850 ? this.show = true : this.show = false;
  }

  public scroll() {
    window.scroll({
      left: 0,
      top: 0,
      behavior: 'smooth'
    })
  }

}
