import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';
import { CurrentWeather } from '../current-weather';
import 'rxjs/rx';
import { ActivatedRoute } from '@angular/router';

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

}
