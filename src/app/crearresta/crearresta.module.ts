import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearrestaPageRoutingModule } from './crearresta-routing.module';

import { CrearrestaPage } from './crearresta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearrestaPageRoutingModule
  ],
  declarations: [CrearrestaPage]
})
export class CrearrestaPageModule {}
