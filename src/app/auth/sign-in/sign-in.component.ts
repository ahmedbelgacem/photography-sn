import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AuthentificationService } from "../../authentification.service";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent {
  profileForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  });
  user = {
    email: "",
    password: "",
    name: ""
  };
  constructor(
    private authService: AuthentificationService,
    private router: Router
  ) {

  }

  submit() {
    this.authService
      .signin(this.user.email, this.user.password)
      .then(result => {
        if (result) {
          this.router.navigate(["/profil",result['name']]);
        }
      })
      .catch(e => {
        Swal.fire({ html: "email ou mot de passe erroné" });
        this.user.password = "";
      });
  }
}
