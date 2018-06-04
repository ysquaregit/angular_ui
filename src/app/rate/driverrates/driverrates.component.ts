import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MatTableDataSource,MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-driverrates',
  templateUrl: './driverrates.component.html',
  styleUrls: ['./driverrates.component.scss']
})
export class DriverratesComponent  {


  displayedColumns = ['leg', 'dtype', 'rpm', 'rph','action'];
  dataSource: MatTableDataSource<Rates>;

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
    const Driver_DATA: Rates[] = [
      {leg: 'Empty', dtype: 'O/O',rpm: 'NA', rph: 15.00,},
      {leg: 'chassis' , dtype: 'Hours',rpm :'NA',rph: 12.00}
      
    ];
    this.dataSource = new MatTableDataSource(Driver_DATA);
   }

   open() {
    let dialogRef = this.dialog.open(CdriverComponent, this.config);
    dialogRef.afterClosed().subscribe(result => {
      this.lastCloseResult1 = result;
    });
   };


}

@Component({
  selector: 'app-cdriver-component',
  template: `<div class="add-dailog">
<mat-card-content>
  <mat-card-title>Create Driver Rate</mat-card-title>  

   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Leg Type</mat-label>
     <mat-select>
     <mat-option value="Empty">Empty</mat-option>
     <mat-option value="Bobtail">Bobtail</mat-option>
     <mat-option value="Chassis">Chassis</mat-option>
     </mat-select>
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Driver Type</mat-label>
     <mat-select placeholder="Select an option">
     <mat-option value="O/O">O/O</mat-option>
     <mat-option value="Lease Purchase">Lease Purchase</mat-option>
     <mat-option value="Company">Company</mat-option>
     
     </mat-select>
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Rate Per Mle</mat-label>
     <input matInput type="text" placeholder="15.00">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Rate per Hour</mat-label>
     <input matInput type="text" placeholder="N/A">
   </mat-form-field>
   
   
   
   
   
  
</mat-card-content>
  <button mat-button type="button" class="mat-raised-button table-btn-rt" color="blue" (click)="dialogRef.close()">Create</button>
  <button mat-button type="button" class="mat-raised-button table-btn-rt" color="light-grey" (click)="dialogRef.close()">Close</button>
  </div>`
})

export class CdriverComponent {
  UserMessage = 'Dialog Message';
  constructor(public dialogRef: MatDialogRef <CdriverComponent> ){}
}

export interface Rates {
  leg: string;
  dtype: string;
  rpm: string;
  rph:number;
  
  

}
