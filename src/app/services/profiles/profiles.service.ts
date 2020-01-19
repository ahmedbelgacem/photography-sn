import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  constructor(private http: HttpClient) { }
  getProfil(name: string) {
    return this.http.get('http://127.0.0.1:8080/profil/select/'+name);
  }
  getPhotos(name: string) {
    return this.http.get('http://127.0.0.1:8080/photo/select/'+name);
  }
}
