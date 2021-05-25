import { Item } from './../models/interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss'],
})
export class NewItemComponent implements OnInit {

  newItem: Item ={
    nombre: '',
    telefono: null,
    ubi: '',
    descripcion: ''
    // imagen: []
  }

  constructor() { }

  ngOnInit() {}

}
