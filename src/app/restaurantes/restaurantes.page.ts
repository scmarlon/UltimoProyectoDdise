import { Router } from '@angular/router';
import { BasedatosService } from './../services/basedatos.service';
import { AlertController } from '@ionic/angular';
import { Item, Menu } from './../models/interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: ['./restaurantes.page.scss'],
})
export class RestaurantesPage implements OnInit {

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

  setMenu(){
    this.router.navigate(['vermenu'])
  }

  editItem(item: Item){
    console.log('di click en ==>', item);
    this.database.setItem(item);
  }

  datosMenu(menu: Menu){
    console.log('di click en ==>', menu);
    this.database.setMenu(menu);
  }

  backPage(){
    this.router.navigate(['admin'])
  }

 

}
