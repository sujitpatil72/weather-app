import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IWeatherDetails } from '../../weather.interface';
@Component({
  selector: 'weather-details-dialog',
  templateUrl: './weather-details-dialog.html',
  styleUrls: ['./weather-details-dialog.scss'],
})
export class WeatherDetailsDialog {
  weatherDetails: IWeatherDetails;

  constructor(
    @Inject(MAT_DIALOG_DATA) public weather_details: IWeatherDetails
  ) {
    this.weatherDetails = weather_details;
  }
}
