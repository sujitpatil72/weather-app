import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherIconUrl'
})
export class WeatherIconUrlPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
