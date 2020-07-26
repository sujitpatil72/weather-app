import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IWeatherDetails, IDialog } from '../../../core/weather.interface';
@Component({
  selector: 'weather-details-dialog',
  templateUrl: './weather-details-dialog.html',
  styleUrls: ['./weather-details-dialog.scss'],
})
export class WeatherDetailsDialog {
  weatherDetails: IWeatherDetails;
  dialogType: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { dialogType: IDialog; weather_details: IWeatherDetails },
    public dialogRef: MatDialogRef<WeatherDetailsDialog>
  ) {
    this.weatherDetails = data.weather_details;

    this.dialogType = data.dialogType;
  }

  closeDialog() {
    this.dialogRef.close(this.data);
  }
}
