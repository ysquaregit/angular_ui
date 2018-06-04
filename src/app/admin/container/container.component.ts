import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { UserEditDialogComponent } from '../user/user.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})

export class ContainerComponent  {
  displayedColumns = ['name', 'address', 'zipcode', 'pcr','action'];
  dataSource: MatTableDataSource<ContainerData>;

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
    const Container: ContainerData[] = [
      {name: 'Container Name', address: '123,6th st.melborbe,fl',zipcode: 66432,pcr: 'Bermnicas Chasis,Midwest Chasis'},
      {name: 'Container Name', address: '123,6th hcjt.kjglborbe,fl',zipcode: 66432,pcr: 'Bermnicas Chasis,Midwest Chasis'}
    ];
    
    this.dataSource = new MatTableDataSource(Container);
    }
    open(){
      let dialogRef = this.dialog.open(ContainerDialogComponent, this.config);
    dialogRef.afterClosed().subscribe(result => {
      this.lastCloseResult1 = result;
    });
  };
    EditCon() {
      let dialogRef = this.dialog.open(ContainerEditComponent, this.config);
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
  selector: 'app-container-dialog',
  template: `<div class="add-dailog">
<mat-card-content>
  <mat-card-title>Create New Container</mat-card-title>  

   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Name</mat-label>
     <input matInput type="text" placeholder="Enter Name">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Google Api Address</mat-label>
     <input matInput type="text" placeholder="Enter Address">
   </mat-form-field>
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Zip Code</mat-label>
     <input matInput type="text" placeholder="Enter">
   </mat-form-field>
   
   <mat-form-field class="ml-xs mr-xs" style="width: 100%;">
     <mat-label>Preferred Chassis Rental</mat-label>
     <mat-select>
     <mat-option value="Midwest Chassis entral">Midwest Chassis Central</mat-option>
     <mat-option value="Bernice's Central">Bernice's Central</mat-option>
     <mat-option value="Chassis Central">Chassis Central</mat-option>
     
     </mat-select>
   </mat-form-field>
</mat-card-content>
  <button mat-button type="button" class="mat-raised-button table-btn-rt" color="blue" (click)="dialogRef.close()">Create</button>
  <button mat-button type="button" class="mat-raised-button table-btn-rt" color="light-grey" (click)="dialogRef.close()">Close</button></div>`
})

export class ContainerDialogComponent {
  UserMessage = 'Dialog Message';
  constructor(public dialogRef: MatDialogRef <ContainerDialogComponent> ){}
}


@Component({
  selector: 'app-container-edit-dialog',
  template: `<div class="add-dailog">
<mat-card-content>
  <mat-card-title>Edit</mat-card-title>  

   
</mat-card-content>
  </div>`
})

export class ContainerEditComponent {
  UserMessage = 'Dialog Message';
  constructor(public dialogRef: MatDialogRef <ContainerEditComponent> ) {}
}


export interface ContainerData {
  name: string;
  address: string;
  zipcode: number;
  pcr: string;
  }