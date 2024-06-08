import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from 'src/app/services/weather-service.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {
  stations: any;
  selectedStation : any;
  stationId: any;
  constructor(public weatherService : WeatherServiceService){}

  ngOnInit(): void {
    this.getWeatherStations();
  }

  async getWeatherStations(){
    this.weatherService.getStations().subscribe(data => {
      this.stations = data.features.map((station:any) => station.properties);
      console.log(this.stations);
    })
  }

  async onStationSelected(station:any){
    this.selectedStation = station.name;
    this.stationId = station.stationIdentifier;
    this.weatherService.getStationDetails(this.stationId).subscribe(data => {
      console.log(data);
    })

  }
}

