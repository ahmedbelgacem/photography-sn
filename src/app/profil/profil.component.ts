import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfilInfos } from './profil-infos';
import { ProfilService } from '../profil.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  private name = 'test';
  private profileData; // = new ProfilInfos();
  // private profileData;
  private photos;

  constructor(
    private router: ActivatedRoute,
    private profilManager: ProfilService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.name = this.router.snapshot.paramMap.get('name');
    console.log(name);
    // this.profileData.mockFill();
    /*  this.profilManager.getProfil(this.name).subscribe(
      data => {
        console.log(data);
        http://127.0.0.1:8080/profil/all
      }
    );*/
    // this.http.get("http://127.0.0.1:8080/profil/all").subscribe(data => {console.log(data)});

    this.profilManager.getProfil(this.name).subscribe(data => {
      console.log(data);
      this.profileData = data[0];
    });
    this.profilManager.getPhotos(this.name).subscribe(data => {
      console.log(data);
      this.photos = data;
    });
  }
}
/*
,
err => {
  console.log(this.name);
}
*/
