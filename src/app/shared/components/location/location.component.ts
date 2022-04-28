/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as _ from 'lodash';
import * as location from './location.json';
@Component({
    selector     : 'app-location',
    templateUrl  : './location.component.html',
})
export class LocationComponent implements OnInit
{
    _province: FormControl;
    provinces: any[];
    districts: any[];
    subdistricts: any[];

    @Input()
    public set province(value: FormControl) {
      if (value) {
        this._province = value;
      }
    }

    _district: FormControl;

    @Input()
    public set district(value: FormControl) {
      if (value) {
        this._district = value;
      }
    }

    _subDistrict: FormControl;

    @Input()
    public set subDistrict(value: FormControl) {
      if (value) {
        this._subDistrict = value;
      }
    }

    _lang: string;

    @Input()
    public set lang(value: string) {
      if (value) {
        this._lang = value;
      }
    }

    /**
     * Constructor
     */
    constructor(
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.provinces = _.uniqBy(location, 'Provide prefix');
    }

    onProvinceChange(event): void {
        this.districts = _.uniqBy(_.filter(location, {'Province Name Eng': event.value}), 'District Name Eng');
    }

    onDistrictChange(event): void {
        this.subdistricts = _.uniqBy(_.filter(location, {'District Name Eng': event.value, 'Province Name Eng': this._province.value}), 'Sub-District Eng');
    }
}
