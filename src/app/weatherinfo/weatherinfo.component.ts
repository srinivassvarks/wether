import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-weatherinfo',
  templateUrl: './weatherinfo.component.html',
  styleUrls: ['./weatherinfo.component.css']
})
export class WeatherinfoComponent implements OnInit {
forecastType:any;
location:any;
wetherList:any[]=[];
  constructor(private _services:UserService) { }

  ngOnInit(): void {

    
    this.location= localStorage.getItem('location');
    this.forecastType=localStorage.getItem('forecasttype');
   
    this.search(this.location);
  }

  search(location)
  {
     this._services.getSearch(location).subscribe(res=>{
       console.log("wether response=>", res)
       this.wetherList=res;
       
     })
  }

}
