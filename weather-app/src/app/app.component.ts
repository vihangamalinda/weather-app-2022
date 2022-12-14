import { Component,OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { CustomTypeInterface } from './types/CustomTypeInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'weather-app';

  weatherData ?:CustomTypeInterface;

  constructor(private weatherService:WeatherService){}

  ngOnInit():void{
    this.weatherService.getWeatherData("London")
    .subscribe({
      next:(response)=>{
        this.weatherData = response;
        console.log(response);
      }
    })
  }
}
