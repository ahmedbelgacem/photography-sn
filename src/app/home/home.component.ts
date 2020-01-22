import {Component, Inject, OnInit} from '@angular/core';
import { Picture} from './picture';
import { HomeService } from '../home.service';
import {AuthentificationService} from '../authentification.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {
  ShowPictureModalComponent
} from './overview/components/show-picture-modal/show-picture-modal.component';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  private array = [];
  private isLoggedIn: boolean;
  private username: string;
  path: any;
  author: any;
  name: any;


  constructor(public dialog: MatDialog, private homeManager: HomeService, private authService: AuthentificationService) {

  }


  ngOnInit(): void {

    // Checking if the user is logged in
    if(this.authService.currentUser){
      this.username = this.authService.currentUser.profil.name;
      this.isLoggedIn = true;
    }
    // Getting the pictures
    this.homeManager.getPhotos().subscribe((data: Picture[]) => {
        this.array = data;
      });
    // Test
    // this.array = Picture.mockFillArray();
  }


  openDialog(picture: Picture) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      url: picture.httpPath,
      author: picture.author,
      name: picture.title
    };
    console.log(dialogConfig);
    this.dialog.open(ShowPictureModalComponent, dialogConfig);
  }
}



