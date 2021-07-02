import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final',
  templateUrl: './final.page.html',
  styleUrls: ['./final.page.scss'],
})
export class FinalPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  OtraCompra(){
    this.router.navigate(['admin'])
  }

  SalirApp(){
    this.router.navigate(['login'])
  }


}
