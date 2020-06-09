import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { pipe } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

  public show: boolean;
  public myForm: FormGroup;
  @Input() atHomePage: boolean;
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.show = false;

    this.myForm = this._fb.group({
      searcher: ['']
    })

    this.myForm.valueChanges.subscribe(data => {
      let cleanText = data.searcher.trim();
      if (cleanText > 2) {
        pipe(
          debounceTime(300),
          distinctUntilChanged()
        )
        // debugger
      }
    })
  }

  public showInput() {
    this.show = !this.show
  }

}
