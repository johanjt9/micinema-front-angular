import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalasComponent } from './components/salas/salas.component';
import { MicinemaComponent } from './components/micinema/micinema.component';
import { SalascreateComponent } from './components/salascreate/salascreate.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/micinema',
    pathMatch: 'full'
  },
  {
    path: 'micinema',
    component: MicinemaComponent
  },
  {
    path: 'micinema/salas',
    component: SalasComponent
  },
  {
    path: 'micinema/salascreate',
    component: SalascreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
