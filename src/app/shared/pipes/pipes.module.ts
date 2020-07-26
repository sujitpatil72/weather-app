import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherIconUrlPipe } from './weather-icon-url.pipe';
import { TemperaturePipe } from './temperature.pipe';

@NgModule({
  declarations: [WeatherIconUrlPipe, TemperaturePipe],
  imports: [CommonModule],
  exports: [WeatherIconUrlPipe, TemperaturePipe],
})
export class PipesModule {}
