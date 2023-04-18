import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PropietarioComponent } from './components/propietario/propietario.component';
import { PropietarioFormComponent } from './components/propietario-form/propietario-form.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TarifasComponent } from './components/tarifas/tarifas.component';
import { PropietarioFormUpdateComponent } from './components/propietario-form-update/propietario-form-update.component';
import { MatriculaComponent } from './components/matricula/matricula.component';
import { MatriculaFormComponent } from './components/matricula-form/matricula-form.component';
import { MatriculaFormUpdateComponent } from './components/matricula-form-update/matricula-form-update.component';
import { ActivosFormUpdateComponent } from './components/activos-form-update/activos-form-update.component';
import { ActivosFormComponent } from './components/activos-form/activos-form.component';
import { ActivosComponent } from './components/activos/activos.component';
import { EstablecimientoFormUpdateComponent } from './components/establecimiento-form-update/establecimiento-form-update.component';
import { EstablecimientoComponent } from './components/establecimiento/establecimiento.component';
import { EstablecimientoFormComponent } from './components/establecimiento-form/establecimiento-form.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table'
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarModule } from 'primeng/calendar';
import { ContentComponent } from './components/content/content.component';
import { CheckboxModule } from 'primeng/checkbox';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { EventsComponent } from './components/content/events/events.component';
import { NextEventsComponent } from './components/content/next-events/next-events.component';
import { AddEventComponent } from './components/content/add-event/add-event.component';


const firebaseConfig = {
  apiKey: "AIzaSyAuzaZmg-Z-7X2o4lVUW_6IgVJUd_McNzM",
  authDomain: "proyccb.firebaseapp.com",
  projectId: "proyccb",
  storageBucket: "proyccb.appspot.com",
  messagingSenderId: "191638421909",
  appId: "1:191638421909:web:78b6441f2563bfff0c769c",
  measurementId: "G-BG1X5BE8GX"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PropietarioComponent,
    PropietarioFormComponent,
    TarifasComponent,
    PropietarioFormUpdateComponent,
    MatriculaComponent,
    MatriculaFormComponent,
    MatriculaFormUpdateComponent,
    ActivosFormUpdateComponent,
    ActivosFormComponent,
    ActivosComponent,
    EstablecimientoFormUpdateComponent,
    EstablecimientoComponent,
    EstablecimientoFormComponent,
    LoginComponent,
    ContentComponent,
    EventsComponent,
    NextEventsComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CardModule,
    ButtonModule,
    AccordionModule,
    PasswordModule,
    InputTextModule,
    TableModule,
    ToolbarModule,
    FileUploadModule,
    ConfirmDialogModule,
    FullCalendarModule,
    CalendarModule,
    CheckboxModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
