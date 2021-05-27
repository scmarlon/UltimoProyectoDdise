import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetmenuPage } from './setmenu.page';

const routes: Routes = [
  {
    path: '',
    component: SetmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetmenuPageRoutingModule {}
