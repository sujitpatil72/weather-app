import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherDetailsDialog } from './weather-details-dialog/weather-details-dialog';
import { MaterialModule } from '../material.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [WeatherDetailsDialog],
  imports: [CommonModule, MaterialModule, PipesModule],
})
export class DialogsModule {}
