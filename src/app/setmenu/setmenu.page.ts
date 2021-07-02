import { FirestorageService } from './../services/firestorage.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { BasedatosService } from './../services/basedatos.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Item, Menu} from './../models/interfaces';
import { VideoPlayer } from '@ionic-native/video-player/ngx';

@Component({
  selector: 'app-setmenu',
  templateUrl: './setmenu.page.html',
  styleUrls: ['./setmenu.page.scss'],
})
export class SetmenuPage implements OnInit {

  newImagen = '';
  newFile = '';
  newVide = '';

  //newMenu = new Menus();
  //listMenu: Array<any> = [];

  newMenu: Menu ={
    nombrePlato: null,
    precio: null,
    imagen: '',
    id:'',
    video: ''
  }
  newItem: Item ={
    nombre: '',
    telefono: null,
    ubi: '',
    descripcion: '',
    id:'',
    idGen: '',
  };

  loading: any;

  constructor(private router: Router ,
    public database: BasedatosService,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public FirestorageService: FirestorageService,
    private videoPlayer: VideoPlayer
    ) { }



  ngOnInit() {
    const item = this.database.getItem();
    if(item !== undefined){
      this.newItem = item;
    }
    
  }

  // testVideo(){
  //   this.videoPlayer.play('https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4').then(() => {
  //     console.log('video completed');
  //   }).catch(err => {
  //     console.log(err);
  //   });
  // }
  
  async save(){
    
    this.presentLoading();
    const path = "Fotos";
    const name = this.database.creaNmobre();
    const res= await this.FirestorageService.uploadImage(this.newFile, path, name);
    this.newMenu.imagen = res;

    //this.listMenu.push(test);
    //this.newItem.menus = this.listMenu;

    const data = this.newItem;
    
    // if(data.id == ''){
    //   data.id = this.database.crearId();
    // }

    //Menu----------
    const RestaID = data.idGen;

    const idAux = data.id;

    console.log("El id del rest generado es => ", RestaID)

    const dataM = this.newMenu;
    dataM.id = RestaID;
    const idEnlace = this.database.crearId();

    const enlaceM = 'Menus'
    await this.database.crearMenu<Menu>(dataM, enlaceM, idEnlace);
    //-----------

  
    this.presentToast('Se guardó con existo', 2000);
    this.loading.dismiss();
    const nombreRest = this.newItem.nombre;
    this.newItem.nombre = nombreRest;
   

     this.newMenu ={
       nombrePlato: null,
       precio: null,
       imagen: '',
       id:'',
       video: ''
     }

  }
  async presentToast(mensaje: string, tiempo: number) {
    const toast = await this.toastController.create({message: mensaje, duration: tiempo });
    toast.present();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Guardando...',
      duration: 2000
    });
    await this.loading.present();
  }

  async newImage(event: any){
     if(event.target.files && event.target.files[0]){
       this.newFile = event.target.files[0];
       const reader = new FileReader();
       reader.onload = ((image) => {
         this.newImagen = image.target.result as string;
       });
       reader.readAsDataURL(event.target.files[0]);
     }
  }

  // async newVideo(event: any){
  //   if(event.target.files && event.target.files[0]){
  //     this.newFile = event.target.files[0];
  //     const reader = new FileReader();
  //     reader.onload = ((VideoPlayer) => {
  //       this.newVide = VideoPlayer.target.result as string;
  //     });
  //     reader.readAsDataURL(event.target.files[0]);
  //   }
  // }

  backPage(){
    this.router.navigate(['admin'])
  }

}
