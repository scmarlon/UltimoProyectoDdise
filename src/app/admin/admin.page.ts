import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  isAdmin = false;

  constructor(private router: Router) {

     const userID = localStorage.getItem('adminID')

     if (userID == "q5KEEzQ5GiPPz9Lc6LOiIZjER5s2")
        this.isAdmin = true;
      
   }

  crerarPage(){
    this.router.navigate(['crearresta'])
  }

  myAction(){
    localStorage.removeItem('adminID');
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
