import { Component, OnInit } from "@angular/core";
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { map } from "rxjs/operators";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"]
})
export class WeatherComponent implements OnInit {
  apiUrl: string = "http://api.openweathermap.org/data/2.5";
  apiKey: string = "api_key";
  weather: Array<any> = [];
  appId: string = "";
  appCode: string = "";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.getWeather(position.coords);
      });
    } else {
      console.error("The browser does not support geolocation...");
    }
  }

  public getWeather(coordinates: any) {
    this.http
      .jsonp(
        "https://weather.cit.api.here.com/weather/1.0/report.json?product=forecast_7days_simple&latitude=" +
          coordinates.latitude +
          "&longitude=" +
          coordinates.longitude +
          "&app_id=" +
          this.appId +
          "&app_code=" +
          this.appCode,
        "jsonpCallback"
      )
      .pipe(map(result => (<any>result).dailyForecasts.forecastLocation))
      .subscribe(
        result => {
          this.weather = result.forecast;
        },
        error => {
          console.error(error);
        }
      );
  }
}
