import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IWeather, IWeatherDetails } from './core/weather.interface';
import { WeatherDetailsDialog } from './shared/dialogs/weather-details-dialog/weather-details-dialog';
import { DetectBreakpointsService } from './core/detect-breakpoints.service';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  searchInput: FormControl = new FormControl('bengaluru', Validators.required);

  matDialogConfig: MatDialogConfig = {
    width: '90%',
    maxWidth: '100vw',
    minWidth: 350,
  };

  citiesWeather = new Map<string, IWeatherDetails>();

  citiesWeatherAction = {
    add: (weather_details: IWeatherDetails) => {
      this.citiesWeather.set(weather_details.name, weather_details);
      console.log('AppComponent -> this.weatherList', this.citiesWeather);
    },
  };

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private detectBreakpointsService: DetectBreakpointsService
  ) {}

  ngOnInit() {
    this.checkForDeviceType();
  }

  checkForDeviceType() {
    this.detectBreakpointsService
      .getDeviceType()
      .subscribe((isHandset: boolean) => {
        this.matDialogConfig.width = isHandset ? '90%' : '30%';
      });
  }

  fetchWeatherDetailsByCity() {
    if (this.searchInput.invalid) return;
    const url = `${API_URL}?q=${this.searchInput.value}&appid=${environment.openWeatherApiKey}`;
    this.http.get(url).subscribe(
      (weather_details: IWeather) => {
        const {
          sys: { country, sunrise, sunset },
          main: { temp, humidity, pressure },
          wind,
          name,
          weather,
          dt,
        } = weather_details;

        this.openWeatherDetailsDialog({
          name,
          country,
          sunrise,
          sunset,
          wind,
          temp,
          humidity,
          pressure,
          weather,
          dt,
        });
      },
      (error) => {
        console.log(
          'AppComponent -> fetchWeatherDetailsByCity -> error',
          error.status
        );
      }
    );
  }

  openWeatherDetailsDialog(weather_data: IWeatherDetails) {
    this.matDialogConfig.data = weather_data;
    const dialogRef = this.dialog.open(
      WeatherDetailsDialog,
      this.matDialogConfig
    );

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      if (!result) return;

      this.citiesWeatherAction.add(result);
    });
  }
}
