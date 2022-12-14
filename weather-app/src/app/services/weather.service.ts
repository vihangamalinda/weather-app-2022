import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomTypeInterface } from '../types/CustomTypeInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http :HttpClient) { }


  getWeatherData(cityName:string):Observable<CustomTypeInterface>{
    return this.http.get<CustomTypeInterface>("https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=93a96a2229ed9a2556764c4b95b2172b")

  }
}
