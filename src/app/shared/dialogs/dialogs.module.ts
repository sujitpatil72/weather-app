import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherDetailsDialog } from './weather-details-dialog/weather-details-dialog';

@NgModule({
  declarations: [WeatherDetailsDialog],
  imports: [CommonModule],
  exports: [WeatherDetailsDialog],
})
export class DialogsModule {}
