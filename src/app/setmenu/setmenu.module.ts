import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetmenuPageRoutingModule } from './setmenu-routing.module';

import { SetmenuPage } from './setmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetmenuPageRoutingModule
  ],
  declarations: [SetmenuPage]
})
export class SetmenuPageModule {}
