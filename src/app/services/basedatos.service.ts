import { Item, Menu } from './../models/interfaces';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore,
   AngularFirestoreDocument, 
   AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BasedatosService {

  editItem: Item;

  editMenu: Menu;

  constructor( public FireStore: AngularFirestore ) { }

  crearResta<tipo>(data: tipo, enlace: string, id: string){
    const ref = this.FireStore.collection<tipo>(enlace);
    return ref.doc(id).set(data);
  }

  crearMenu<tipo>(data: tipo, enlace: string, id: string){
    const ref = this.FireStore.collection<tipo>(enlace);
    return ref.doc(id).set(data);
  }

  crearId(){
    return this.FireStore.createId();
  }
  creaNmobre(){
    return this.FireStore.createId();
  }

  eliminarResta<tipo>(enlace: string, id: string){
    const ref = this.FireStore.collection<tipo>(enlace);
    return ref.doc(id).delete();
  }

  getResta<tipo>(path: string): Observable<tipo[]>{
    const ref = this.FireStore.collection<tipo>(path);
    return ref.valueChanges();

  }

  getMenu<tipo>(path: string): Observable<tipo[]>{
    const ref = this.FireStore.collection<tipo>(path);
    return ref.valueChanges();
  }

  editarResta(){

  }

  setItem(item: Item){
    this.editItem = item;
  }
  
  getItem(){
    console.log("HOLITA",this.editItem)
    return this.editItem;
  }

  setMenu(menu: Menu){
    this.editMenu = menu;
  }

  getMenu2(){
    return this.editMenu;
    
  }

  


}
