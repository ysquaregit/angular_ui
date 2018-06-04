import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-chassis',
  templateUrl: './chassis.component.html',
  styleUrls: ['./chassis.component.scss']
})
export class ChassisComponent  {

  displayedColumns = ['name','padd','zip','action'];
  dataSource: MatTableDataSource<ChaData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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
    const chassis: ChaData[]= [
      {name:'Bernies Chassis', padd:'517 Grand Drive,Holden,Mo',zip:66213},
      {name: 'Chassis Central', padd: '7420 Galactic Avenue,Denver,C0', zip:66213}
    ]

    this.dataSource = new MatTableDataSource(chassis);
  }

    open(){
      let dialogRef = this.dialog.open(CreateComponent, this.config);
    dialogRef.afterClosed().subscribe(result => {
      this.lastCloseResult1 = result;
    });
  };
  
  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
  @Component({
    selector: 'app-create-component',
    template: `<div class="add-dailog">
  <mat-card-content>
    <mat-card-title>New Chassis Company</mat-card-title>  
  
     <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
       <mat-label>Company Name</mat-label>
       <input matInput type="text" placeholder="Amazon">
     </mat-form-field>
     <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
       <mat-label>Google Api Address</mat-label>
       <input matInput type="text" placeholder="Enter Full Address">
     </mat-form-field>
     <mat-form-field class="ml-xs mr-xs" style="width: 30%;">
       <mat-label>Address</mat-label>
       <input matInput type="text" placeholder="502 Flannel Street">
     </mat-form-field>
     <mat-form-field class="ml-xs mr-xs" style="width: 30%;">
       <mat-label>City</mat-label>
       <input matInput type="text" placeholder="Kitty City">
     </mat-form-field>
     <mat-form-field class="ml-xs mr-xs" style="width: 15%;">
       <mat-label>Zip Code</mat-label>
       <input matInput type="number" placeholder="66213">
     </mat-form-field>
     <mat-form-field class="ml-xs mr-xs" style="width: 10%;">
       <mat-label>state</mat-label>
       <mat-select placeholder="Select an option">
       <mat-option value="KS">KS</mat-option>
       <mat-option value="MO">MO</mat-option>
       <mat-option value="NY">NY</mat-option>
       <mat-option value="FL">FL</mat-option>
       <mat-option value= "NJ"> NJ</mat-option>
       </mat-select>
     </mat-form-field>
     
     
     
    
  </mat-card-content>
    <button mat-button type="button" class="mat-raised-button table-btn-rt" color="blue" (click)="dialogRef.close()">Create</button>
    <button mat-button type="button" class="mat-raised-button table-btn-rt" color="light-grey" (click)="dialogRef.close()">Close</button>
    </div>`
  })
  
  export class CreateComponent {
    UserMessage = 'Dialog Message';
    constructor(public dialogRef: MatDialogRef <CreateComponent> ){}
  }

  export interface ChaData {
    name: string;
    padd: string;
    zip: number;

  }