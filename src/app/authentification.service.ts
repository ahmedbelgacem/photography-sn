import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Md5 } from "ts-md5/dist/md5";

import { Subject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class AuthentificationService {
  loggingEvent: Subject<boolean> = new Subject<boolean>();
  currentUser = null;
  constructor(private http: HttpClient) {
    let rawUser = localStorage.getItem("user");
    if (rawUser) {
      this.currentUser = JSON.parse(rawUser);
      this.loggingEvent.next(true);
    }
  }
  signup(name: string, email: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let body = {
        user: {
          email: email,
          password: Md5.hashStr(password)
        },
        profil: {
          name: name,
          description: "hi im a new photographer",
          httpPath: "http://localhost/uploads-photographysn/avatar.jpg",
          fsPath: "/var/www/html/uploads-photographysn/avatar.jpg"
        }
      };
      console.dir(body);
      this.http.post("http://localhost:8080/auth/signup", body).subscribe(
        response => {
          resolve(response["status"]);
        },
        err => {
          reject();
        }
      );
    });
  }
  signin(email: string, password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      let body = {
        email: email,
        password: Md5.hashStr(password)
      };
      console.dir(body);
      this.http.post("http://localhost:8080/auth/signin", body).subscribe(
        response => {
          console.log(response);
          localStorage.setItem("user", JSON.stringify(response));
          this.currentUser = response;
          this.loggingEvent.next(true);
          resolve(response["profil"]);
        },
        err => {
          reject();
        }
      );
    });
  }
  isConnected(): boolean {
    return localStorage.getItem("user") != undefined;
  }
  disconnect() {
    return localStorage.removeItem("user");
  }
}
