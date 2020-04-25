import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { FindCourierComponent } from '../find-courier/find-courier.component';
import { FindMedicineComponent } from '../find-medicine/find-medicine.component';
import { FindPatientComponent } from '../find-patient/find-patient.component';
import { FindUserComponent } from '../find-user/find-user.component';
import { SchedulingComponent } from '../scheduling/scheduling.component';
import { StatusChangeComponent } from '../status-change/status-change.component';
import { StubsListComponent } from '../stubs-list/stubs-list.component';
import { NewCourierComponent } from '../new-courier/new-courier.component';
import { NewPatientComponent } from '../new-patient/new-patient.component';
import { NewMedicineComponent } from '../new-medicine/new-medicine.component';
import { OrdersDetailComponent } from '../orders-detail/orders-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'new-patient',
        pathMatch: 'full',
      },
      {
        path: 'find-courier',
        component: FindCourierComponent,
      },
      {
        path: 'find-medicine',
        component: FindMedicineComponent,
      },
      {
        path: 'find-patient',
        component: FindPatientComponent,
      },
      {
        path: 'find-user',
        component: FindUserComponent,
      },
      {
        path: 'new-courier',
        component: NewCourierComponent,
      },
      {
        path: 'new-medicine',
        component: NewMedicineComponent,
      },
      {
        path: 'new-patient',
        component: NewPatientComponent,
      },
      {
        path: 'new-user',
        component: FindUserComponent,
      },
      {
        path: 'scheduling',
        component: SchedulingComponent,
      },
      {
        path: 'order/:id',
        component: OrdersDetailComponent,
      },
      {
        path: 'status-change',
        component: StatusChangeComponent,
      },
      {
        path: 'stubs-list',
        component: StubsListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
