import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './pages/login/login-screen/login-screen.component';
import { AngularFireAuthModule } from '@angular/fire/auth';

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
    AppRoutingModule,
    AngularFireModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
