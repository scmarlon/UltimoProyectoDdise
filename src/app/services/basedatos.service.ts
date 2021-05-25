import { Injectable } from '@angular/core';
import { AngularFirestore,
   AngularFirestoreDocument, 
   AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BasedatosService {

  constructor( public FireStore: AngularFirestore ) { }

  crearResta<tipo>(data: tipo, enlace: string){
    const ref = this.FireStore.collection<tipo>(enlace);
    return ref.add(data);
  }

  eliminarResta(){

  }

  getResta(){

  }

  editarResta(){

  }
}
