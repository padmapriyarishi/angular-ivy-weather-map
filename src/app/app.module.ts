import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { WeatherServiceService } from "./weather-service.service";
import { WeatherService } from "./weather.service";
import { WeatherComponent } from "./weather/weather.component";
import { MomentPipe } from './moment.pipe';
import { FahrenheitPipe } from './fahrenheit.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, WeatherComponent, MomentPipe, FahrenheitPipe],
  bootstrap: [AppComponent],
  providers: [WeatherServiceService, WeatherService]
})
export class AppModule {}
