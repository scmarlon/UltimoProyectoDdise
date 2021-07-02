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

  lugar = "";
  constructor(private router: Router ,
    public database: BasedatosService,
    public alertController: AlertController) { 
      
    }

  ngOnInit() {''
    this.getItems();
  }

  getItems(){
    this.lugar = localStorage.getItem('lugar')
    const enlace = 'Items';
    let itemsTest: Item[] = [];
    this.database.getResta<Item>(enlace).subscribe( res => {
        for (const item of res) {
           if(item.ubi === this.lugar)
              itemsTest.push(item)
        }
        this.items = itemsTest;
    });
  }

  setMenu(){
    this.router.navigate(['vermenu'])
  }

  editItem(item: Item){
    this.database.setItem(item);
  }

  datosMenu(menu: Menu){
    this.database.setMenu(menu);
  }

  backPage(){
    this.router.navigate(['admin'])
  }

 

}
