import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';
import { CurrentWeather } from '../current-weather';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import 'rxjs/rx';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {

  myWeather:CurrentWeather;

  constructor(private ws:WeatherService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data:{myWeather:CurrentWeather}) => {
        this.myWeather = data.myWeather;
      }
    );
  }

  onSubmit(weatherForm:NgForm){
    this.ws.cityWeather(weatherForm.value.city).subscribe(
      (data)=> {
        console.log(data);
        this.myWeather = new CurrentWeather(
                                data.list[0].name,
                                parseInt(data.list[0].main.temp),
                                data.list[0].weather[0].icon,
                                data.list[0].weather[0].description,
                                parseInt(data.list[0].main.temp_max), 
                                parseInt(data.list[0].main.temp_min));
        }
      );
  }
}
