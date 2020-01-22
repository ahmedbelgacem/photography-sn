import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-show-picture-modal',
  templateUrl: './show-picture-modal.component.html',
  styleUrls: ['./show-picture-modal.component.scss'],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }

  ]
})
export class ShowPictureModalComponent implements OnInit {

  private readonly url: string;
  private readonly author: string;
  private readonly name: string;

  constructor(
    private dialogRef: MatDialogRef<ShowPictureModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.url = data.url;
    this.author = data.author;
    this.name = data.name;

    console.log(data);
  }


  ngOnInit() {

  }

}


export interface DialogData {
  url: string;
  author: string;
  name: string;
}
