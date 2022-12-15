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
  cityName:string ='';
  weatherData ?:CustomTypeInterface;

  constructor(private weatherService:WeatherService){}

  ngOnInit():void{
    
  }

  onChangeHandler(val:string){
    this.cityName ='';
    this.cityName=val;
      console.log(this.cityName);
  }

  onSumbit(){
    if(this.cityName.length>1){
    this.getWeatherData(this.cityName);
    }
  }

  private getWeatherData(nameCity:string){
    this.weatherService.getWeatherData(nameCity)
    .subscribe({
      next:(response)=>{
        this.weatherData = response;
        console.log(response);
      }
    })
  }

}
