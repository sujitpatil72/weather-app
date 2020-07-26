import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'weather-error-dialog',
  templateUrl: './weather-error-dialog.html',
  styleUrls: ['./weather-error-dialog.scss'],
})
export class WeatherErrorDialog {
  cityName: string = this.data.cityName;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    private data: { cityName: string }
  ) {}
}
