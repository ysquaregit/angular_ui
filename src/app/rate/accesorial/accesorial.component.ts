import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MatTableDataSource,MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-accesorial',
  templateUrl: './accesorial.component.html',
  styleUrls: ['./accesorial.component.scss']
})
export class AccesorialComponent {
  displayedColumns = ['name', 'int', 'val', 'des','rate','action'];
  dataSource: MatTableDataSource<Access>;

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
    const ACCESS_DATA: Access[] = [
      {name: 'Per Diem', int: 'Days', val: 4, des: '',rate: '$300'},
      {name: 'Demuurage' , int: 'Hours', val: 2,des: 'safa',rate:'$123'}
      
    ];
    this.dataSource = new MatTableDataSource(ACCESS_DATA);
   }
open() {
  let dialogRef = this.dialog.open(ACreateComponent, this.config);
  dialogRef.afterClosed().subscribe(result => {
    this.lastCloseResult1 = result;
  });
};
edit() {
  let dialogRef = this.dialog.open(EditComponent, this.config);
  dialogRef.afterClosed().subscribe(result => {
    this.lastCloseResult1 = result;
  });
};



}


@Component({
  selector: 'app-acreate-component',
  template: `<div class="add-dailog">
<mat-card-content>
  <mat-card-title>Create New</mat-card-title>  

   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Name</mat-label>
     <input matInput type="text" placeholder="Enter Name">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Interval</mat-label>
     <mat-select placeholder="Select an option">
     <mat-option value="Interval">Interval</mat-option>
     <mat-option value="Hours">Hours</mat-option>
     <mat-option value="Days">Days</mat-option>
     <mat-option value="Weeks">Weeks</mat-option>
     <mat-option value= "Months"> Months</mat-option>
     </mat-select>
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Value</mat-label>
     <input matInput type="text" placeholder="Enter value">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Description</mat-label>
     <input matInput type="text" placeholder="Add desc">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Rate</mat-label>
     <input matInput type="number" placeholder="123.90">
   </mat-form-field>
   
   
   
   
  
</mat-card-content>
  <button mat-button type="button" class="mat-raised-button table-btn-rt" color="blue" (click)="dialogRef.close()">Create</button>
  <button mat-button type="button" class="mat-raised-button table-btn-rt" color="light-grey" (click)="dialogRef.close()">Close</button>
  </div>`
})

export class ACreateComponent {
  UserMessage = 'Dialog Message';
  constructor(public dialogRef: MatDialogRef <ACreateComponent> ){}
}

@Component({
  selector: 'app-edit-component',
  template: `<div class="add-dailog">
<mat-card-content>
  <mat-card-title>Edit</mat-card-title>  

   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Name</mat-label>
     <input matInput type="text" placeholder="Enter Name">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Interval</mat-label>
     <mat-select placeholder="Select an option">
     <mat-option value="Interval">Interval</mat-option>
     <mat-option value="Hours">Hours</mat-option>
     <mat-option value="Days">Days</mat-option>
     <mat-option value="Weeks">Weeks</mat-option>
     <mat-option value= "Months"> Months</mat-option>
     </mat-select>
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Value</mat-label>
     <input matInput type="text" placeholder="Enter value">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Description</mat-label>
     <input matInput type="text" placeholder="Add desc">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Rate</mat-label>
     <input matInput type="number" placeholder="123.90">
   </mat-form-field>
   
   
   
   
  
</mat-card-content>
  <button mat-button type="button" class="mat-raised-button table-btn-rt" color="blue" (click)="dialogRef.close()">Save</button>
  <button mat-button type="button" class="mat-raised-button table-btn-rt" color="light-grey" (click)="dialogRef.close()">Close</button>
  </div>`
})

export class EditComponent {
  UserMessage = 'Dialog Message';
  constructor(public dialogRef: MatDialogRef <EditComponent> ){}
}
export interface Access {
  name: string;
  int: string;
  val: number;
  des: string;
  rate: string;
  

}


