import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.scss']
})
export class EditProfilComponent implements OnInit {

  constructor() { }

  firstprofileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  secondprofileform = new FormGroup({
    bio: new FormControl(''),
    phone: new FormControl(''),
    fields: new FormControl(''),
  })

  ngOnInit() {
  }

}
