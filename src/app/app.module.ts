import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './pages/login/login-screen/login-screen.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { FormNewComponent } from './shared/components/form-new/form-new.component';
import { UploadDataComponent } from './shared/components/upload-data/upload-data.component';
import { FindComponent } from './shared/components/find/find.component';
import { FormEditComponent } from './shared/components/form-edit/form-edit.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NewPatientComponent } from './pages/new-patient/new-patient.component';
import { FindPatientComponent } from './pages/find-patient/find-patient.component';
import { FindMedicineComponent } from './pages/find-medicine/find-medicine.component';
import { FindCourrierComponent } from './pages/find-courrier/find-courrier.component';
import { FindUserComponent } from './pages/find-user/find-user.component';
import { NewMedicineComponent } from './pages/new-medicine/new-medicine.component';
import { NewCourrierComponent } from './pages/new-courrier/new-courrier.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { StubsListComponent } from './pages/stubs-list/stubs-list.component';
import { SchedulingComponent } from './pages/scheduling/scheduling.component';
import { StatusChangeComponent } from './pages/status-change/status-change.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    HeaderComponent,
    MenuComponent,
    SpinnerComponent,
    FormNewComponent,
    UploadDataComponent,
    FindComponent,
    FormEditComponent,
    LoginComponent,
    HomeComponent,
    NewPatientComponent,
    FindPatientComponent,
    FindMedicineComponent,
    FindCourrierComponent,
    FindUserComponent,
    NewMedicineComponent,
    NewCourrierComponent,
    NewUserComponent,
    StubsListComponent,
    SchedulingComponent,
    StatusChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
