import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http : HttpClient) { }

  getStations(){
   return this.http.get<any>('https://api.weather.gov/stations?limit=100');
  }
  getStationDetails(stationId:any){
    return this.http.get<any>(`https://api.weather.gov/stations/${stationId}/observations?limit=1`);
   }
}
