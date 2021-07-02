import { BasedatosService } from './../services/basedatos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  isAdmin = false;

  lugar = "";

  item = this.database.getItem();



  

  constructor(private router: Router,
    public database: BasedatosService) {

     const userID = localStorage.getItem('adminID')
     console.log("Cual id tengo: ", userID);
     console.log("HOLAAAA", this.item)
     

     if (userID == "q5KEEzQ5GiPPz9Lc6LOiIZjER5s2" || userID == "7VeXe8wNokO1ZwFpQrzHAVC3nur1")
        this.isAdmin = true;
      
   }

  agregarLugar(){
    localStorage.setItem('lugar', this.lugar);
    
  }


  crerarPage(){
    this.router.navigate(['crearresta'])
  }

  myAction(){
    localStorage.removeItem('adminID');
    localStorage.removeItem('lugar');
    this.router.navigate(['login'])
  }
 
  ordenarPage(){
    this.router.navigate(['ordenar'])
  }
  
  restPage(){
    this.router.navigate(['restaurantes'])
  }

  ngOnInit() {
  }

}
