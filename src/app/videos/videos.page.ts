import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  constructor(private router: Router) { }

  

  ngOnInit() {
  }

  backPage(){
    this.router.navigate(['vermenu'])
  } 

}
