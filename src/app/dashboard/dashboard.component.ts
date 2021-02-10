import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userForm:FormGroup;
  submitted:boolean=false;
location:any;

ftype:any=[{"type":"current"},{"type":"hourly"},{"type":"16-day"}]
  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {

    this.userForm = this.fb.group({
      location:['',Validators.required],
      forecasttype:['', Validators.required]
    })
    
  }

  search()
  {
   this.submitted=true;

   if(this.userForm.invalid)
   {
     return;
   }

   
 localStorage.setItem('location', this.userForm.value.location);
 localStorage.setItem('forecasttype', this.userForm.value.forecasttype)
 
 this.router.navigate(['/weatherinfo']);

  }

}
