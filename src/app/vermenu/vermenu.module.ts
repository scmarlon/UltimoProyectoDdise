import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VermenuPageRoutingModule } from './vermenu-routing.module';

import { VermenuPage } from './vermenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VermenuPageRoutingModule
  ],
  declarations: [VermenuPage]
})
export class VermenuPageModule {}
