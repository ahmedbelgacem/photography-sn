import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
  HttpRequest
} from "@angular/common/http";
import { FormControl, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";
import { catchError, last, map, tap } from "rxjs/operators";
import { of } from "rxjs";
import {Router} from '@angular/router'
@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"]
})
export class PortfolioComponent implements OnInit {
  myDatepicker: any;

 title="test";
 profileForm = new FormGroup({
      title: new FormControl('')
    });   
  @Input() param = "img";
  /** Target URL for file uploading. */
  @Input() target = "localhost:8080/photo/upload";
  /** File extension that accepted, same as 'accept' of <input type="file" />.
   By the default, it's set to 'image/*'. */
  @Input() accept = "image/*";
  /** Allow you to add handler after its completion. Bubble up response text from remote. */
  @Output() complete = new EventEmitter<string>();
  fsPath = "";
  httpPath ="" ;
  username = JSON.parse(localStorage.getItem("user")).profil.name;
  private files: Array<FileUploadModel> = [];

  constructor(private http: HttpClient,private router:Router) {}

  ngOnInit() {}

  onClick() {
    const fileUpload = document.getElementById(
      "fileUpload"
    ) as HTMLInputElement;
    fileUpload.onchange = () => {
      for (let index = 0; index < fileUpload.files.length; index++) {
        const file = fileUpload.files[index];
        this.files.push({
          data: file,
          state: "in",
          inProgress: false,
          progress: 0,
          canRetry: false,
          canCancel: true
        });
      }
      this.uploadFiles();
    };
    fileUpload.click();
  }

  cancelFile(file: FileUploadModel) {
    file.sub.unsubscribe();
    this.removeFileFromArray(file);
  }

  retryFile(file: FileUploadModel) {
    this.uploadFile(file);
    file.canRetry = false;
  }

  private uploadFile(file: FileUploadModel) {
    const fd = new FormData();
    fd.append(this.param, file.data);

    /*  const req = new HttpRequest('POST', this.target, fd, {
      reportProgress: true
    });*/

    this.http.post("http://localhost:8080/photo/upload",fd).subscribe(
      (response)=> {
        this.fsPath = response.fsPath;
        this.httpPath = response.httpPath;
        console.log(this.fsPath);
        console.log(this.httpPath);

      },
      err => {
        console.log(err);
      }
    );

    /*file.inProgress = true;
    file.sub = this.http.request(req).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            file.progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            return event;
        }
      }),
      tap(message => { }),
      last(),
      catchError((error: HttpErrorResponse) => {
        file.inProgress = false;
        file.canRetry = true;
        return of(`${file.data.name} upload failed.`);
      })
    ).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {
          this.removeFileFromArray(file);
          this.complete.emit(event.body);
        }
      }
    );*/
  }
  private sendFile() {
    this.http.post("http://localhost:8080/photo/send",
    //console.log(
    {
      title: this.title,
      author: this.username,
      fsPath: this.fsPath,
      httpPath: this.httpPath
    }).subscribe(response => {
        this.router.navigate(["/profil",this.username]);
        },
        err => {
          console.log(err);
        }
      )}
  private uploadFiles() {
    const fileUpload = document.getElementById(
      "fileUpload"
    ) as HTMLInputElement;
    fileUpload.value = "";

    this.files.forEach(file => {
      this.uploadFile(file);
    });
  }

  private removeFileFromArray(file: FileUploadModel) {
    const index = this.files.indexOf(file);
    if (index > -1) {
      this.files.splice(index, 1);
    }
  }
}

export class FileUploadModel {
  data: File;
  state: string;
  inProgress: boolean;
  progress: number;
  canRetry: boolean;
  canCancel: boolean;
  sub?: Subscription;
}
