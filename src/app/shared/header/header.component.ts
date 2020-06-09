import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewChecked {

  constructor() { }

  public title: string;
  public subTitle: string;
  public showSearcher: boolean
  @Input() atHomePage: boolean;
  @ViewChild('header') header: ElementRef;
  public translation: number;

  ngOnInit(): void {
    this.title = "70's";
    this.subTitle = "Rock bands"
    this.translation = 0;
  }

  ngAfterViewChecked() {
    if (this.header?.nativeElement) {
      this.translation = this.header.nativeElement.clientHeight;
    }
  }

  public scrollDown(distance) {
    window.scroll({
      left: 0,
      top: distance,
      behavior: 'smooth'
    })
  }

}
