import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IWeather, IWeatherDetails, IDialog } from './core/weather.interface';
import { WeatherDetailsDialog } from './shared/dialogs/weather-details-dialog/weather-details-dialog';
import { DetectBreakpointsService } from './core/detect-breakpoints.service';
import { WeatherErrorDialog } from './shared/dialogs/weather-error-dialog/weather-error-dialog';

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
    },
    remove: (cityName: string) => {
      this.citiesWeather.delete(cityName);
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

        this.openWeatherDetailsDialog(
          {
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
          },
          'add'
        );
      },
      (error) => {
        if (error.status === 404)
          this.openWeatherErrorDialog(this.searchInput.value);
      }
    );
  }

  cityWeatherDetails(weather_data: IWeatherDetails) {
    this.openWeatherDetailsDialog(weather_data, 'remove');
  }

  openWeatherDetailsDialog(
    weather_details: IWeatherDetails,
    dialogType: IDialog
  ) {
    this.matDialogConfig.data = {
      weather_details,
      dialogType,
    };

    const dialogRef = this.dialog.open(
      WeatherDetailsDialog,
      this.matDialogConfig
    );

    dialogRef
      .afterClosed()
      .subscribe(
        (result: { dialogType: string; weather_details: IWeatherDetails }) => {
          if (!result) return;

          if (result.dialogType === 'add')
            this.citiesWeatherAction.add(result.weather_details);
          if (result.dialogType === 'remove')
            this.citiesWeatherAction.remove(result.weather_details.name);
        }
      );
  }

  openWeatherErrorDialog(cityName: string) {
    this.matDialogConfig.data = { cityName };
    const dialogRef = this.dialog.open(
      WeatherErrorDialog,
      this.matDialogConfig
    );
  }
}
