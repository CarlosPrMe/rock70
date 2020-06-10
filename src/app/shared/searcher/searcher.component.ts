import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { pipe, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, filter } from 'rxjs/operators';
import { BandsService } from 'src/app/services/bands.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

  public show: boolean;
  public myForm: FormGroup;
  public bands;
  @Input() atHomePage: boolean;
  constructor(private _fb: FormBuilder, private _bandsService: BandsService, private _router: Router) { }

  ngOnInit(): void {
    this.show = false;
    this.myForm = this._fb.group({
      searcher: ['']
    })

    this.myForm.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        map(data => data.searcher.trim()),
        // Cuando el usuario ya no está tecleando y la búsqueda ha cambiado,
        // hacemos la petición para buscar coincidencias
        switchMap(text => text.length > 2 ? this._bandsService.searchBand(text) : of([]))
      )
      .subscribe((bands) => {
        this.bands = bands;
        console.log('this.bands', this.bands);
      }, (error) => {
        console.log('error', error);
      })
  }

  public showInput() {
    this.show = !this.show
    this.myForm.get('searcher').setValue('');
  }

  public onNavigate(event: number) {
    this._router.navigate(['/band', event]);
    this.myForm.get('searcher').setValue('');
  }

}
