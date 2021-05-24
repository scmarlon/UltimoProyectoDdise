import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearresta',
  templateUrl: './crearresta.page.html',
  styleUrls: ['./crearresta.page.scss'],
})
export class CrearrestaPage implements OnInit {

  constructor(private router: Router) { }
  
  backPage(){
    this.router.navigate(['admin'])
  }

  ngOnInit() {
  }

}
