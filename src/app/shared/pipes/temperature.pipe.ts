import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
  transform(value: string): unknown {
    const temperatureInDegrees = parseInt(value) - 273;
    return temperatureInDegrees;
  }
}
