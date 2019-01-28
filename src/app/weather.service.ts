import { Injectable } from '@angular/core';
import { CurrentWeather } from './current-weather';
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/rx';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  myWeather:CurrentWeather; // = new CurrentWeather('Ny', '89', 'https://png.pngtree.com/element_origin_min_pic/16/10/23/59cba0af2fbfaa5dc53286eeb10ce9f0.jpg', 'sunny', '89', '89');
  location

  constructor(private http:Http) { }

  localWeather(){
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.location = pos.coords;
        const lat = this.location.latitude;
        const lon = this.location.longitude;
        return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7833973f510e0b7d953c2393864291ae&units=metric`).map((response:Response) => response.json()).toPromise().then(
          (data)=> {
            console.log(data);
            this.myWeather = new CurrentWeather(
                                    data.name,
                                    parseInt(data.main.temp),
                                    data.weather[0].icon,
                                    data.weather[0].description,
                                    parseInt(data.main.temp_max), 
                                    parseInt(data.main.temp_min));
              res(this.myWeather);
          }
        )
      })
    })
  }
}
