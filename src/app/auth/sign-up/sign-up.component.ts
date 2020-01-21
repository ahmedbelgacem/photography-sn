import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthentificationService} from '../../authentification.service'
import Swal from 'sweetalert2'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  user = {
    email:"",
    password:"",
    name:""
  }
  constructor(private _formBuilder: FormBuilder,private authService:AuthentificationService,private router:Router) {}

  ngOnInit() {


    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });

  }

  submit(){
    this.authService.signup(this.user.name,this.user.email,this.user.password).then(result=>{
      if(result){
        Swal.fire({html:"Inscription réussi , veuillez vous connecter"}).then(e => {
          this.router.navigate(['/auth/sign-in'])
        })
      }
    }).catch(e=>{
      console.error(e)
    })
  }

}
