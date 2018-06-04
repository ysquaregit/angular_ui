import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource,MatPaginator,MatSort,MatDialog,MatDialogConfig,MatDialogRef} from '@angular/material';



@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  displayedColumns = ['id', 'type', 'address', 'city','state','zipcode','cname','action'];
  dataSource: MatTableDataSource<LocationManagement>;

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

  constructor(public dialog: MatDialog){
    const ELEMENT_DATA: LocationManagement[] = [
      {id: 1,type: 'Rails',address: '517 Grand Drive', city: 'Townville', state: 'MO',zipcode: 66213,cname: 'N/A'},
      {id: 3,type: 'Home Yard',address: '812 Grand Drive', city: 'Townville', state: 'MO',zipcode: 66214,cname: 'N/A'}
      
    ];
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);    

  }

  create() {
    let dialogRef = this.dialog.open(CreateLocComponent, this.config);
    dialogRef.afterClosed().subscribe(result => {
      this.lastCloseResult1 = result;
    });
  };

  edit() {
    let dialogRef = this.dialog.open(EditLocComponent, this.config);
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
  selector: 'app-create-loc',
  template: `<div class="add-dailog">
<mat-card-content>
  <mat-card-title>New Location</mat-card-title>  

   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Location type</mat-label>
     <mat-select>
     <mat-option value="Rails">Rails</mat-option>
     <mat-option value="Chassis Depot">Chassis Depot</mat-option>
     <mat-option value="Container Depot">Container Depot</mat-option>
     <mat-option value="Home Yard">Home Yard</mat-option>
     <mat-option value="Consignor">Consignor</mat-option>
     <mat-option value="Consignee">Consignee</mat-option>
     <mat-option value="Repair">Repair</mat-option>
     <mat-option value="SteamShip">Steamship</mat-option>
     </mat-select>
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Google Api Address</mat-label>
     <input matInput type="text" placeholder= "Enter Full Address">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 30%;">
     <mat-label>Street</mat-label>
     <input matInput type="text" placeholder="502 Flannel Street">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 30%;">
     <mat-label>City</mat-label>
     <input matInput type="text" placeholder="Kitty City">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 15%;">
     <mat-label>Zip code</mat-label>
     <input matInput type="number" placeholder="66312">
     
     
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 10%;">
     <mat-label>State</mat-label>
     <mat-select>
     <mat-option value="KS">KS</mat-option>
     <mat-option value="MO">MO</mat-option>
     <mat-option value="NY">NY</mat-option>
     <mat-option value="FL">FL</mat-option>
     <mat-option value="NJ">NJ</mat-option>
     </mat-select>
   </mat-form-field>
   
   
  
</mat-card-content>
  <button mat-button type="button" class="mat-raised-button table-btn-rt" color="blue" (click)="dialogRef.close()">Create</button>
  <button mat-button type="button" class="mat-raised-button table-btn-rt" color="blue" (click)="dialogRef.close()">Close</button></div>`
})

export class CreateLocComponent {
  UserMessage = 'Dialog Message';
  constructor(public dialogRef: MatDialogRef <CreateLocComponent> ){}
}


@Component({
  selector: 'app-edit-loc',
  template: `<div class="add-dailog">
<mat-card-content>
  <mat-card-title>Edit</mat-card-title>  

  </mat-card-content>
  </div>`
})

export class EditLocComponent {
  UserMessage = 'Dialog Message';
  constructor(public dialogRef: MatDialogRef <EditLocComponent> ){}
}


export interface LocationManagement {
  id: number;
  type: string;
  address: string;
  city: string;
  state: string;
  zipcode: number;
  cname: string;

}


