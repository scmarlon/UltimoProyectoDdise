import { Item } from '../models/interfaces';
import { BasedatosService } from '../services/basedatos.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.page.html',
  styleUrls: ['./ordenar.page.scss'],
})
export class OrdenarPage implements OnInit {

  items: Item[] = [];

  constructor(private router: Router ,
    public database: BasedatosService,
    public alertController: AlertController) { }

   

  ngOnInit() {
    this.getItems();
  }

  getItems(){
    const enlace = 'Items';
    this.database.getResta<Item>(enlace).subscribe( res => {
        this.items = res;
    });
  }

  backPage(){
    this.router.navigate(['admin'])
  }

  setMenu(){
    this.router.navigate(['setmenu'])
  }

  editItem(item: Item){
    console.log('di click en ==>', item);
    this.database.setItem(item);
  }

  async deleteItem(item: Item){
      const alert = await this.alertController.create({
        header: 'Advertencia!',
        message: 'Seguro que desea <strong>eliminar</strong> el restaurante?!!!',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Okay',
            handler: () => {
              console.log('Confirm Okay');
               this.database.eliminarResta<Item>('Items', item.id).catch( res => {
                console.log('Paso esto ==>', res);
              });
             console.log('Todo nasheee');
            }
          }
        ]
      });
  
      await alert.present();
  }

}
