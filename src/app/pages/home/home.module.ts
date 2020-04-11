import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FindCourierComponent } from '../find-courier/find-courier.component';
import { FindMedicineComponent } from '../find-medicine/find-medicine.component';
import { FindPatientComponent } from '../find-patient/find-patient.component';
import { FindUserComponent } from '../find-user/find-user.component';
import { NewCourierComponent } from '../new-courier/new-courier.component';
import { NewMedicineComponent } from '../new-medicine/new-medicine.component';
import { NewPatientComponent } from '../new-patient/new-patient.component';
import { NewUserComponent } from '../new-user/new-user.component';
import { SchedulingComponent } from '../scheduling/scheduling.component';
import { StatusChangeComponent } from '../status-change/status-change.component';
import { StubsListComponent } from '../stubs-list/stubs-list.component';
// import { FormModule } from '../../shared/components/forms/form.module';
import { MatCardModule, MatExpansionModule, MatIconModule, MatButtonModule } from '@angular/material';
import { ComponentsModule } from '../../shared/components/components.module';
import { UploadDataComponent } from 'src/app/shared/components/upload-data/upload-data.component';

@NgModule({
  declarations: [
    HomeComponent,
    FindCourierComponent,
    FindMedicineComponent,
    FindPatientComponent,
    FindUserComponent,
    NewCourierComponent,
    NewMedicineComponent,
    NewPatientComponent,
    NewUserComponent,
    SchedulingComponent,
    StatusChangeComponent,
    StubsListComponent,
    UploadDataComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule
  ],
})
export class HomeModule { }
