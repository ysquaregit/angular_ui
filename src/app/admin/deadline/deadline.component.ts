import { Component, OnInit } from '@angular/core';
import { MatTableDataSource,MatDialogConfig,MatDialog,MatDialogRef } from '@angular/material';
import { IButton } from 'selenium-webdriver';

@Component({
  selector: 'app-deadline',
  templateUrl: './deadline.component.html',
  styleUrls: ['./deadline.component.scss']
})

export class DeadlineComponent {
  displayedColumns = [ 'name', 'desc', 'interval', 'value', 'action'];
  dataSource: MatTableDataSource<PeriodicElement>;


  lastCloseResult: string;
  lastCloseResult1: string;
  config: MatDialogConfig = {
    disableClose: false,
    width: '',
    height: '',
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  };

  constructor(public dialog: MatDialog) {
    const ELEMENT_DATA: PeriodicElement[] = [
      {name: 'Deadline Y', desc: 'Deadline DEsc', interval: 'Days', value: 4},
      {name: 'Deadline X' ,desc: 'Deadline Desc', interval: 'Hours', value: 2}
      
    ];
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  Create(){
    let dialogRef = this.dialog.open(DeadlineDialogComponent, this.config);
  dialogRef.afterClosed().subscribe(result => {
    this.lastCloseResult1 = result;
  });
};

edit() {
  let dialogRef = this.dialog.open(EditDeadlineComponent, this.config);
  dialogRef.afterClosed().subscribe(result => {
    this.lastCloseResult1 = result;
  });

};
}

@Component({
  selector: 'app-deadline-dialog',
  template: `<div class="add-dailog">
<mat-card-content>
  <mat-card-title>Create New Deadline</mat-card-title>  

   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Deadline Name</mat-label>
     <input matInput type="text" placeholder="Enter Deadline Name">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Description</mat-label>
     <input matInput type="text" placeholder="Enter Description">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Interval</mat-label>
     <mat-select>
     <mat-option value="Hours">Hours</mat-option>
     <mat-option value="Days">Days</mat-option>
     <mat-option value="Weeks">Weeks</mat-option>
     <mat-option value="Months">Months</mat-option>
     </mat-select>
   </mat-form-field>
   
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Value</mat-label>
     <input matInput type="text" placeholder="Enter Value">
   </mat-form-field>
</mat-card-content>
  <button mat-button type="button" class="mat-raised-button table-btn-rt" color="blue" (click)="dialogRef.close()">Create</button>
  <button mat-button type="button" class="mat-raised-button table-btn-rt" color="light-grey" (click)="dialogRef.close()">Close</button></div>`
})

export class DeadlineDialogComponent {
  UserMessage = 'Dialog Message';
  constructor(public dialogRef: MatDialogRef <DeadlineDialogComponent> ){}
}


@Component({
  selector: 'app-edit-deadline',
  template: `<div class="add-dailog">
<mat-card-content>
  <mat-card-title>Edit Deadline</mat-card-title>  

   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Deadline Name</mat-label>
     <input matInput type="text" placeholder="Enter Deadline Name">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Description</mat-label>
     <input matInput type="text" placeholder="Enter Description">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Interval</mat-label>
     <mat-select>
     <mat-option value="Hours">Hours</mat-option>
     <mat-option value="Days">Days</mat-option>
     <mat-option value="Weeks">Weeks</mat-option>
     <mat-option Value="Months">Months</mat-option>
     </mat-select>
   </mat-form-field>
   
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Value</mat-label>
     <input matInput type="text" placeholder="Enter Value">
   </mat-form-field>
</mat-card-content>
  <button mat-button type="button" class="mat-raised-button table-btn-rt" color="blue" (click)="dialogRef.close()">Create</button>
  <button mat-button type="button" class="mat-raised-button table-btn-rt" color="light-grey" (click)="dialogRef.close()">Close</button></div>`
})

export class EditDeadlineComponent {
  UserMessage = 'Dialog Message';
  constructor(public dialogRef: MatDialogRef <EditDeadlineComponent> ){}
}

export interface PeriodicElement {
  name: string;
  desc: string;
  interval: string;
  value: number;
  

}

