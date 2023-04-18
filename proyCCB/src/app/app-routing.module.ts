import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivosFormUpdateComponent } from './components/activos-form-update/activos-form-update.component';
import { ActivosFormComponent } from './components/activos-form/activos-form.component';
import { ActivosComponent } from './components/activos/activos.component';
import { AddEventComponent } from './components/content/add-event/add-event.component';
import { ContentComponent } from './components/content/content.component';
import { EventsComponent } from './components/content/events/events.component';
import { EstablecimientoFormUpdateComponent } from './components/establecimiento-form-update/establecimiento-form-update.component';
import { EstablecimientoFormComponent } from './components/establecimiento-form/establecimiento-form.component';
import { EstablecimientoComponent } from './components/establecimiento/establecimiento.component';
import { LoginComponent } from './components/login/login.component';
import { MatriculaFormUpdateComponent } from './components/matricula-form-update/matricula-form-update.component';
import { MatriculaFormComponent } from './components/matricula-form/matricula-form.component';
import { MatriculaComponent } from './components/matricula/matricula.component';
import { PropietarioFormUpdateComponent } from './components/propietario-form-update/propietario-form-update.component';
import { PropietarioFormComponent } from './components/propietario-form/propietario-form.component';
import { PropietarioComponent } from './components/propietario/propietario.component';
import { TarifasComponent } from './components/tarifas/tarifas.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  {path:'', component: PropietarioComponent, canActivate:[AuthGuard]},
  {path:'calendar', component: EventsComponent, canActivate:[AuthGuard]},
  {path:'calendar/add-event', component: AddEventComponent, canActivate:[AuthGuard]},
  {path:'login', component: LoginComponent},
  {path:'formulario', component: PropietarioFormComponent, canActivate:[AuthGuard]},
  {path:'formulario/:id', component: PropietarioFormUpdateComponent},
  {path:'tarifas', component: TarifasComponent, canActivate:[AuthGuard]},
  {path:'matriculas', component: MatriculaComponent},
  {path:'matriculas/formulario-matri', component: MatriculaFormComponent},
  {path:'matriculas/formulario-matri/:id', component: MatriculaFormUpdateComponent},
  {path:'activos', component: ActivosComponent, canActivate:[AuthGuard]},
  {path:'activos/formulario-activo', component: ActivosFormComponent},
  {path:'activos/formulario-activo/:id', component: ActivosFormUpdateComponent},
  {path:'establecimiento', component: EstablecimientoComponent},
  {path:'establecimiento/formulario-establecimiento', component: EstablecimientoFormComponent},
  {path:'establecimiento/formulario-establecimiento/:id', component: EstablecimientoFormUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
