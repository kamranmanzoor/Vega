import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';

const routes: Routes = [
  {
    path: 'vehicles/new',
    component: VehicleFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
