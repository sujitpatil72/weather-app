import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherDetailsDialog } from './weather-details-dialog/weather-details-dialog';
import { MaterialModule } from '../material.module';
import { PipesModule } from '../pipes/pipes.module';
import { WeatherErrorDialog } from './weather-error-dialog/weather-error-dialog';

@NgModule({
  declarations: [WeatherDetailsDialog, WeatherErrorDialog],
  imports: [CommonModule, MaterialModule, PipesModule],
})
export class DialogsModule {}
