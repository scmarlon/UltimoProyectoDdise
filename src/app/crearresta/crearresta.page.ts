import { BasedatosService } from './../services/basedatos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from './../models/interfaces';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-crearresta',
  templateUrl: './crearresta.page.html',
  styleUrls: ['./crearresta.page.scss'],
})
export class CrearrestaPage implements OnInit {

  constructor(private router: Router ,
              public database: BasedatosService,
              public toastController: ToastController,
              public loadingController: LoadingController) { }

  newItem: Item ={
    nombre: '',
    telefono: null,
    ubi: '',
    descripcion: '',
    id:''
    // imagen: []
  };

  loading: any;

  backPage(){
    this.router.navigate(['admin'])
  }

  async save(){
    this.presentLoading();
    console.log('Esto es lo que guardaremos', this.newItem);
    const data = this.newItem;
    data.id = this.database.crearId();
    const enlace = 'Items';
    await this.database.crearResta<Item>(data, enlace, data.id);
    this.presentToast('Se guardó con existo', 3000);
    this.loading.dismiss();
    this.newItem ={
      nombre: '',
      telefono: null,
      ubi: '',
      descripcion: '',
      id:''
      // imagen: []
    };
  }

  async presentToast(mensaje: string, tiempo: number) {
    const toast = await this.toastController.create({message: mensaje, duration: tiempo });
    toast.present();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Guardando...',
      duration: 2000
    });
    await this.loading.present();
  }
  

  ngOnInit() {
  }

}
