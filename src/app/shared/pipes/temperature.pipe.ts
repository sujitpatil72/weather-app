import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
  transform(value: string | number): unknown {
    const valueInInteger = typeof value === 'string' ? parseInt(value) : value;
    const temperatureInDegrees = Math.round((valueInInteger - 273) * 10) / 10;
    return temperatureInDegrees;
  }
}
