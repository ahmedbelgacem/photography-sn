import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProfilInfos} from './profil-infos';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {


  private id;
  private profileData = new ProfilInfos();
  private pictureIds = [ 1 , 2, 3, 4, 5, 6, 7, 8, 9 ];



  constructor(private router: ActivatedRoute) {
  }

  ngOnInit() {
    // Mock Example
    this.profileData.mockFill();

  console.log(this.profileData);
    // profileData = ProfileService.getProfilDataById(this.id);

    this.id = +this.router.snapshot.paramMap.get('id');

  }

}
