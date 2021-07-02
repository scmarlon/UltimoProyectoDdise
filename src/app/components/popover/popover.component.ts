import { PopoverController } from '@ionic/angular';
import { BasedatosService } from './../../services/basedatos.service';
import { Router } from '@angular/router';
import { Menu } from './../../models/interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  newPrecio = 1;

  

  constructor(private router: Router ,
    public database: BasedatosService,
    private popCtrl: PopoverController) { }

    menuSelect = this.database.getMenu2();

  ngOnInit() {}

  comprar(){
   
    this.router.navigate(['comprar'])
    
    
  }
  t(event){
    // console.log("soy Preciooo => ", this.newPrecio);
    
    localStorage.setItem('precio', event);
    console.log(event);
    
  }

  onClick(){
    this.popCtrl.dismiss();
  }

  verVideo(){
    this.router.navigate(['videos'])
   }

}
