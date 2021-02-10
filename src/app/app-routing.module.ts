import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {WeatherinfoComponent} from './weatherinfo/weatherinfo.component';

const routes: Routes = [{path:'user', component:DashboardComponent},{path:'', redirectTo:'user', pathMatch:'full'},
{path:'weatherinfo', component:WeatherinfoComponent},
{path:'**', redirectTo:'user', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
