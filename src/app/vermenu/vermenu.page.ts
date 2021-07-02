
import { AlertController} from '@ionic/angular';
import { BasedatosService } from './../services/basedatos.service';
import { Router } from '@angular/router';
import { Menu, Item } from './../models/interfaces';
import { OnInit} from '@angular/core';


import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../components/popover/popover.component';

@Component({
  selector: 'app-vermenu',
  templateUrl: './vermenu.page.html',
  styleUrls: ['./vermenu.page.scss'],
})
export class VermenuPage implements OnInit {



  testMenu: Menu[] = []

  newItem: Item ={
    nombre: '',
    telefono: null,
    ubi: '',
    descripcion: '',
    id:'',
    idGen: '',
  };

  

  menu = this.database.getMenu2();
  

  test = "";
  test2 = null;

  item = this.database.getItem();

  

  constructor(private router: Router ,
    public database: BasedatosService,
    public alertController: AlertController,
    private popCtrl: PopoverController) { 
      
      console.log("EL ITEM ES: ", this.item.idGen);
      this.test = this.item.idGen;

      console.log("a ver que trae: ", this.menu);
    }

  async ngOnInit() {
    await this.getMenus();
    
  }


  getMenus(){
    const enlace = 'Menus';
    let itemsTest: Menu[] = [];
    this.database.getMenu<Menu>(enlace).subscribe( res => {
      for (const item of res) {
           itemsTest.push(item)
     }
      this.testMenu = itemsTest;
      console.log("que tiene TestMeu: ", this.testMenu)
      //this.menus = res;
      console.log("SOY RES => ", res);
      
      
    });
    
  }

  datosMenu(menu: Menu){
    this.database.setMenu(menu);
  }
  

  comprar(menu: Menu){
    this.database.setMenu(menu);
    
  }

  backPage(){
    this.router.navigate(['admin'])
  }

  async presentPopover(ev: any) {
    const popover = await this.popCtrl.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  onClick(){
    
  }

}
