import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getSearch(location):Observable<any>
  {
    return this.http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q="+location+"&cnt="+16+"&appid=2ea9f1cc0cf3f82f29bf9d59fec67582"
    )
  }
}
