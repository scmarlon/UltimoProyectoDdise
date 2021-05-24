import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearrestaPage } from './crearresta.page';

const routes: Routes = [
  {
    path: '',
    component: CrearrestaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearrestaPageRoutingModule {}
