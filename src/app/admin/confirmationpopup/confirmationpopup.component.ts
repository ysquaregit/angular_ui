import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirmationpopup',
  templateUrl: './confirmationpopup.component.html',
  styleUrls: ['./confirmationpopup.component.scss']
})
export class ConfirmationpopupComponent {
  selectedValue:String;
  constructor(public dialogRef: MatDialogRef <ConfirmationpopupComponent> ,@Inject(MAT_DIALOG_DATA) data) {
    this.selectedValue=data;
  }


}
