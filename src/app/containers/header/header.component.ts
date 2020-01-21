import { Component, OnInit, ElementRef,AfterViewInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AuthentificationService } from "../../authentification.service";
import {Router} from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,AfterViewInit {


  isLoggedIn:boolean = false;
  username:string="guest";
  link="['/profil/"+this.username+"']"
  constructor(private authService: AuthentificationService,private router:Router) {}

  ngOnInit() {
    if(this.authService.currentUser){
      this.username = this.authService.currentUser.profil.name
      this.isLoggedIn = true;
    }
  }

  ngAfterViewInit(){


    this.authService.loggingEvent.asObservable().subscribe(event=>{

      if(event){

          this.isLoggedIn = true;
          this.username = JSON.parse(localStorage.getItem("user")).profil.name;



      }
      else{
        this.isLoggedIn = false;
      }
    })
  }
  disconnect(){
    this.authService.disconnect();
    this.router.navigate(['/home'])
  }

}
