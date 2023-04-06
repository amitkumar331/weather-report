
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  city: any;
  weather: any;
  todaydate=new Date();

  constructor(private http: HttpClient) {}

  getWeather() {
    const apiKey = '81f0dc6619a5facd0868c8aecb5770b9';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${apiKey}`;
    this.http.get(url).subscribe((data: any) => {
      this.weather = data;
    });
  }
}
