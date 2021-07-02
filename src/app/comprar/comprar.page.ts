import { Menu } from './../models/interfaces';
import { BasedatosService } from './../services/basedatos.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.page.html',
  styleUrls: ['./comprar.page.scss'],
})
export class ComprarPage implements OnInit {
  precio = localStorage.getItem('precio')

  newPrecio = null;
  aux = null;

  aux2= null

  constructor(private router: Router,
    public database: BasedatosService) { }

    
    menuSelect = this.database.getMenu2();

    
    
    

  ngOnInit() {
    this.aux = this.menuSelect.precio;
    this.aux2 = localStorage.getItem('precio')
    this.newPrecio = this.aux * this.aux2
  }

  final(){
    this.router.navigate(['final'])
  }

  backPage(){
    this.router.navigate(['admin'])
  }

}
