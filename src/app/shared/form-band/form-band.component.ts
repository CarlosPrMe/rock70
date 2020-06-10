import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { BandModel } from 'src/app/models/band.model';
import { customValidatorUrl } from '../../validators/customValidator';
import { customValidatorImage } from '../../validators/customValidator';

@Component({
  selector: 'app-form-band',
  templateUrl: './form-band.component.html',
  styleUrls: ['./form-band.component.scss']
})
export class FormBandComponent implements OnInit {

  public myForm: FormGroup;
  @Output() newBand = new EventEmitter<BandModel>()
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {

    this.myForm = this._fb.group({
      name: ['', Validators.required],
      logo: ['', Validators.compose([customValidatorUrl, customValidatorImage])],
      image: ['', Validators.compose([customValidatorUrl, customValidatorImage])],
      bio: ['', Validators.compose([Validators.required, Validators.minLength(300)])],
      video: ['', Validators.compose([customValidatorUrl])],
      members: this._fb.array([
        this._fb.group({
          name: [''],
          sur_name: [''],
        })
      ]),
      discography: this._fb.array([
        this._fb.group({
          name: ['', Validators.required],
          year: ['', Validators.required]
        })
      ])
    })
  }

  get members() {
    return this.myForm.get('members') as FormArray;
  }
  get discography() {
    return this.myForm.get('discography') as FormArray;
  }

  public addMemmber() {
    this.members.push(this._fb.group({
      name: [''],
      sur_name: [''],
    }));
  }

  public addAlbum() {
    this.discography.push(
      this._fb.group({
        name: [''],
        year: ['']
      })
    );
  }

  public submit(form) {
    this.newBand.emit(form);
    this.myForm.reset();
  }

}
