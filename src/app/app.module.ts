import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WeatherComponentComponent } from './weather-component/weather-component.component';
import { WeatherServiceService } from './weather-service.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, WeatherComponentComponent ],
  bootstrap:    [ AppComponent ],
  providers: [WeatherServiceService]
})
export class AppModule { }
