import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IWeatherDetails } from '../../../core/weather.interface';
@Component({
  selector: 'weather-details-dialog',
  templateUrl: './weather-details-dialog.html',
  styleUrls: ['./weather-details-dialog.scss'],
})
export class WeatherDetailsDialog {
  weatherDetails: IWeatherDetails;

  constructor(
    @Inject(MAT_DIALOG_DATA) public weather_details: IWeatherDetails,
    public dialogRef: MatDialogRef<WeatherDetailsDialog>
  ) {
    this.weatherDetails = weather_details;
  }

  weatherActions(abcd) {
    this.dialogRef.close(this.weatherDetails);
  }
}
