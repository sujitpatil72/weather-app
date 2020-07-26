import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherIconUrl',
})
export class WeatherIconUrlPipe implements PipeTransform {
  url = 'http://openweathermap.org/img/wn/';
  transform(weather: { id: string; main: string; icon: string }): unknown {
    return `${this.url}${weather.icon}@2x.png`;
  }
}
