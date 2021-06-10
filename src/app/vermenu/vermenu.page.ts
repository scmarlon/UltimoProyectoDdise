import { AlertController } from '@ionic/angular';
import { BasedatosService } from './../services/basedatos.service';
import { Router } from '@angular/router';
import { Menu } from './../models/interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vermenu',
  templateUrl: './vermenu.page.html',
  styleUrls: ['./vermenu.page.scss'],
})
export class VermenuPage implements OnInit {

  menus = [];

  constructor(private router: Router ,
    public database: BasedatosService,
    public alertController: AlertController) { }

  async ngOnInit() {
    await this.getMenus();
    console.log('MENUSSS==>', this.menus);
  }


  getMenus(){
    const enlace = 'Menus';
    this.database.getMenu<Menu>(enlace).subscribe( res => {
      console.log('ressss', res);
        this.menus = res;
    });
  }

  backPage(){
    this.router.navigate(['admin'])
  }

}
