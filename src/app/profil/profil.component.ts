import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {


  private  link_picture = 'https://cache.magazine-avantages.fr/data/photo/w1000_c18/4j/hommebrunyeuxverts.jpg';

  constructor() { }

  ngOnInit() {
  }

}
