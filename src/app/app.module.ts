import { LineChartComponent } from './line-chart/line-chart.component';
import { DashComponent } from './dash/dash.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './_services/auth-guard.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MedicoListComponent } from './medico/medico-list/medico-list.component';
import { MedicoOneComponent } from './medico/medico-one/medico-one.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RemedioFormComponent } from './remedio/remedio-form/remedio-form.component';
import { RemedioListComponent } from './remedio/remedio-list/remedio-list.component';
import { RemedioOneComponent } from './remedio/remedio-one/remedio-one.component';
import { PacienteFormComponent } from './paciente/paciente-form/paciente-form.component';
import { PacienteListComponent } from './paciente/paciente-list/paciente-list.component';
import { PacienteOneComponent } from './paciente/paciente-one/paciente-one.component';
import { ConsultaFormComponent } from './consulta/consulta-form/consulta-form.component';
import { ConsultaListComponent } from './consulta/consulta-list/consulta-list.component';
import { ConsultaOneComponent } from './consulta/consulta-one/consulta-one.component';
import { MedicoFormComponent } from './medico/medico-form/medico-form.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { ConsultaRemedioListComponent } from './consulta/consulta-remedio-list/consulta-remedio-list.component';
import { ConsultaRemedioFormComponent } from './consulta/consulta-remedio-form/consulta-remedio-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    MedicoListComponent,
    MedicoOneComponent,
    RemedioFormComponent,
    RemedioListComponent,
    RemedioOneComponent,
    PacienteFormComponent,
    PacienteListComponent,
    PacienteOneComponent,
    ConsultaFormComponent,
    ConsultaListComponent,
    ConsultaOneComponent,
    MedicoFormComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    ConsultaRemedioListComponent,
    ConsultaRemedioFormComponent,
    LoginComponent,
    RegisterComponent,
    BarChartComponent,
    DashComponent,
    LineChartComponent


  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
    BrowserAnimationsModule,



  ],
  providers: [AuthGuard, authInterceptorProviders],
  bootstrap: [AppComponent]


})
export class AppModule { }
