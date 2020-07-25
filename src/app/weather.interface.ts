export interface IWeather {
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  wind: {
    deg: number;
    speed: number;
  };
  weather: [];
}
export interface IWeatherDetails {
  name: string;
  country: string;
  sunrise: number;
  sunset: number;
  humidity: number;
  pressure: number;
  temp: number;

  wind: {
    deg: number;
    speed: number;
  };
  weather: [];
}
