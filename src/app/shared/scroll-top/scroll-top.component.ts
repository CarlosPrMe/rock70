import { Component, OnInit, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent implements OnInit, OnChanges {

  constructor() { }
  public show: boolean;

  @Input() scrollValue: number;

  ngOnInit(): void { }

  ngOnChanges(change:SimpleChanges){
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
